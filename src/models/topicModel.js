/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topicModel.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/08/07 22:51:33 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/08/07 23:48:41 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const { Topic } = require('../schema')

/**
 * This is topic model
 * @class Topic
 */
class TopicModel {
	
	/**
	 * save topic
	 * @param {Object} options 
	 * @memberof Topic
	 */
	save(options) {
		let topic = new Topic(options)
		topic.save()
	}
	
	/**
	 * find topics
	 * @param {Number} offset - default 0
	 * @param {Number} limit - default 10
	 * @memberof Topic
	 */
	findAll(offset, limit) {
		return Topic.find({})
			.sort({createdAt: -1})
			.skip(offset)
			.limit(limit)
			.lean()
			.exec()
	}
	
	/**
	 * find topic
	 * @param {String} id - ObjectId 
	 * @memberof Topic
	 */
	findById(id) {
		return Topic.findById(id).exec()
	}
}

module.exports = new TopicModel()
