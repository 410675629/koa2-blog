/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topics.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:26:42 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/11/01 00:09:44 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


const express = require('express')
const router = express.Router()

const Joi = require('joi')
const joiValidator = require('../../middlewares/joiValidator')

const topicService = require('../../services/topicService')

// get topics and return count
router.get('/', joiValidator({
	query: {
		page: Joi.number().min(1),
		limit: Joi.number().min(10),
		catalog: Joi.string(), 			// optional
		tag: Joi.string()   	 		  // optional
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

// get hot topics
router.get('/hot', async (req, res) => {
	try {
		let data = await topicService.hotTopic()
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

// create topic
router.post('/', joiValidator({
	body: {
		title: Joi.string().required(),
		abstract: Joi.string().required(),
		content: Joi.string().required(),
		html: Joi.string().required(),
		catalog: Joi.string().required(),  // catalog ObjectId
		tags: Joi.array().required()			 // array
	}
}), async (req, res) => {
	try {
		let topic = Object.assign({}, req.body, {
			author: 'JianJin Wu', // FIXME: userid
			catalog: 'xxxxx'
		})
		let data = await topicService.create(topic)
		return res.success(data)
	}
	catch (err) {
		return res.error(err)
	}
})

module.exports = router
