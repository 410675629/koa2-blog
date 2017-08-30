/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topics.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/07/01 02:20:17 by Lucky Wu        #+#    #+#             */
/*   Updated: 2017/08/08 00:07:21 by Lucky Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const router = express.Router()

const Joi = require('joi')
const joiValidator = require('../../middlewares/joiValidator')

const topicService = require('../../services/topicService')

// get topics
router.get('/', joiValidator({
	query: {
		page: Joi.number().min(1),
		limit: Joi.number().min(10)
	}
}), async (req, res) => {
	try {
		let page = req.query.page || 1
		let limit = req.query.limit || 10
		let data = await topicService.findAllAndCount(page, limit)
		return res.success(data)
	}
	catch (err) {
		return res.error(err)
	}
})

// get topic count
router.get('/count',  async (req, res) => {
	try {
		let data = await topicService.count()
		return res.success(data)
	}
	catch (err) {
		return res.error(err)
	}
})

// get topic
router.get('/:id', joiValidator({
	params: {
		id: Joi.string().required()
	}
}), async (req, res) => {
	try {
		let id = req.params.id
		let data = await topicService.findById(id)
		return res.success(data)
	}
	catch (err) {
		return res.error(err)
	}
})

// create new topic
router.post('/', joiValidator({
	// body: {
	// 	title: Joi.string().required(),
	// 	markdown: Joi.string().required(),
	// 	html: Joi.string().required()
	// }
}), async (req, res) => {
	try {
		let args = {
			title: 'test title',
			slug: 'test slug',
			type: 'javaScript',
			markdown: '<h1>hello world</h1>',
			html: '<h1>hello world</h1>',
			createdBy: 'Lucky Wu',
			updatedBy: 'Lucky Wu',
			tags: ['test1','test2']
		}
		let data = await topicService.save(args)
		return res.success(data)
	}
	catch (err) {
		return res.error(err)
	}
})

module.exports = router
