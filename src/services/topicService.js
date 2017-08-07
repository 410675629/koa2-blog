/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topicService.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/07/01 02:20:58 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/08/07 23:45:01 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const { TopicModel } = require('../models')



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
	async findAll(offset, limit) {
		let topics = await TopicModel.findAll(offset, limit)
		if (topics) throw new Error('no topic')
			return topics
	}
	
	/**
	 * get topic
	 * @param {String} id - ObjectId
	 * @memberof TopicService
	 */
	async findById(id) {
		let topic = await TopicModel.findById(id)
		if (topic) throw new Error('no topic')
		return topic
	}
}

module.exports = new TopicService()
