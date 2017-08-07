/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topics.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/07/01 02:20:17 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/08/07 23:45:05 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const router = express.Router()

const Joi = require('joi')
const joiValidator = require('../../middlewares/joiValidator')

const topicService = require('../../services/topicService')

// return topic list 
router.get('/', joiValidator({
	query: {
		offset: Joi.number().min(0),
		limit: Joi.number().min(10)
	}
}), async (req, res) => {
	try {
		let offset = req.query.offset || 0
		let limit = req.query.limit || 10
		let topic = await topicService.findAll(offset, limit)
		return res.success(topic)
	}
	catch (err) {
		return res.error(err)
	}
})

// return topic
router.get('/:id', joiValidator({
	params: {
		id: Joi.string().required()
	}
}), async (req, res) => {
	try {
		let id = req.params.id
		let topic = await topicService.findById(id)
		return res.success(topic)
	}
	catch (err) {
		return res.error(err)
	}
})

module.exports = router