/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topicService.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:30:05 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/11/01 00:08:08 by JianJin Wu       ###   ########.fr       */
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
		let topics = await Topic.find({status: 'published'})
			.populate('author', 'nickname')
			.populate('catalog', 'name')
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
	 * // FIXME: readCount ++ 
	 * @param {String} id - ObjectId
	 * @memberof TopicService
	 */
	async findById(id) {
		let topic = await Topic.findById(id)
		.populate('author', 'nickname')
		.populate('catalog', 'name')
		.exec()
		if (!topic) throw new Error('no topic')
		return topic
	}

	/**
	 * create new topic
	 * @param {Object} options 
	 * @memberof TopicService
	 */
	create(options) {
		return Topic.create(options)
	}

	/**
	 * topic count
	 * @memberof TopicService
	 */
	count() {
		return Topic.count({status: 'published'}).exec()
	}
	
	/**
	 * get hot topics
	 * @returns 
	 * @memberof TopicService
	 */
	hotTopic() {
		return Topic.find({status: 'published'}, {title: 1, readCount: 1})
		.sort({readCount: 1})
		.limit(6)
		.exec()
	}
}

module.exports = new TopicService()
