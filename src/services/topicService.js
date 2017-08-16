/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topicService.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/07/01 02:20:58 by Lucky Wu        #+#    #+#             */
/*   Updated: 2017/08/08 00:05:10 by Lucky Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const { Topic } = require('../models')

/**
 * This is topic service.
 * @class TopicService
 */
class TopicService {
	
	/**
	 * get topics
	 * @param {Number} offset - default 0
	 * @param {Number} limit - default 10
	 * @memberof TopicService
	 */
	async findAllAndCount(offset, limit) {
		let topics = await Topic.find({state: 'published'})
			.sort({createdAt: -1})
			.skip(offset)
			.limit(limit)
			// .lean()
			.exec()
		if (!topics) throw new Error('no topic')
			return topics
	}
	
	/**
	 * get topic
	 * @param {String} id - ObjectId
	 * @memberof TopicService
	 */
	async findById(id) {
		let topic = await Topic.findById(id).exec()
		if (!topic) throw new Error('no topic')
		return topic
	}

	/**
	 * create new topic
	 * @param {Object} options 
	 * @memberof TopicService
	 */
	save(options) {
		let topic = new Topic(options)
		topic.save()
		return topic
	}
}

module.exports = new TopicService()
