/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   res.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/06/30 23:20:34 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/06/30 23:20:36 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const { getconfig } = require('getconfig')

const fundebug = require('../utils/fundebug')
const Logger = require('../utils/logger').Logger('system error')

const DEFAULT_SUCCESS_STATUS = 200
const DEFAULT_ERROR_STATUS = 500

//http code
const httpCode = {
	200: 'ok',
	400: 'invalid parameters',
	401: 'Authentication',
	403: 'forbidden',
	404: 'not found', 
	500: 'system error'
}

module.exports = (req, res, next) => {
	
	/**
  * asuccess response
  * @param {any} data 
  * @param {number} status - default 500
  */
	res.success = (data, status) => {
		data = data || null
		status = status || DEFAULT_SUCCESS_STATUS
		return res.status(status).json({
			code: status,
			message: httpCode[status],
			data: data
		})
	}
	
	/**
	 * error response 
	 * @param {any} data 
	 * @param {number} status - default 500
	 */
	res.error = (err, status) => {
		let message, data, stack
		status = status || DEFAULT_ERROR_STATUS
		if (err) {
			if (err instanceof Error) {
				message = err.message
				stack = err.stack
			} else if (typeof err === 'string') {
				message = err
			} else if (err instanceof Array) {
				data = err
			} else if (typeof err === 'object') {
				message = err.message
			}
			if (getconfig['env'] === 'dev') {
				return res.status(status).json({
					code: status || 'no httpCode',
					message: message || 'system error',
					data: data || '',
					stack: stack
				})
			} else {
				// used in prod environment
				Logger.error({
					method: req.method,
					url: req.originalUrl,
					message: message,
					stack: err.stack
				})
				fundebug.notifyError(err)

				return res.status(status).json({
					code: status || 'no httpCode',
					message: message || 'system error',
					data: data || ''
				})
			}
		}
	}
	next()
}
