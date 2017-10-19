/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topicService.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:30:05 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/09/04 22:30:07 by JianJin Wu       ###   ########.fr       */
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
	 * @param {Number} page - default 1
	 * @param {Number} limit - default 10
	 * @memberof TopicService
	 */
	async findAllAndCount(page, limit) {
		let topics = await Topic.find({state: 'published'})
			.sort({createdAt: -1})
			.skip((page - 1) * limit)
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

	/**
	 * topic count
	 * @memberof TopicService
	 */
	count() {
		return Topic.count({state: 'published'}).exec()
	}
}

module.exports = new TopicService()
