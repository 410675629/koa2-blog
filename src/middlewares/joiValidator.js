/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   joiValidator.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:26:53 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/09/04 22:26:55 by JianJin Wu       ###   ########.fr       */
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
