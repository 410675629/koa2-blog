/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   joiValidator.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/06/30 23:20:42 by Lucky Wu        #+#    #+#             */
/*   Updated: 2017/06/30 23:21:36 by Lucky Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const Joi = require('joi')

module.exports = (schema, options) => {
	
	options = options || { abortEarly: false }
	
	return (req, res, next) => {
		let toValidate = {}
		if (!schema) {
			return next()
		}
		// params body query
		['params', 'body', 'query'].forEach(function (key) {
			if (schema[key]) {
				toValidate[key] = req[key]
			}
		})
		
		return Joi.validate(toValidate, schema, options, (err) => {
			if (err) {
				let details = err && err.details || []
				let failures = []
				for (let detail of details) {
					failures.push(detail.message)
				}
				return res.error(failures, 400)
			}
			return next()
		})
	}
}
