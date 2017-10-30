/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topic.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:28:49 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/10/30 00:17:14 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const moment = require('moment')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const base = require('./base')
const ObjectId  = Schema.ObjectId


const TopicSchema = new Schema({
	title: { type: String, required: true },
	abstract: { type: String, required: true },
	content: { type: String, required: true },
	html: { type: String, required: true },
	tags: { type: Array, required: true },
	// published, unpublished
	status: { type: String, default: 'published' },
	top: { type: Boolean, default: false },
	readCount: { type: Number, default: 0 },
	replyCount: { type: Number, default: 0 },
	likeCount: { type: Number, default: 0 },
	catalogId: { type: ObjectId },
	userId: { type: ObjectId },
	deleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

TopicSchema.plugin(base)
TopicSchema.index({createdAt: -1}) // 降序索引

TopicSchema.virtual('createdDate').get(function() {
  return moment(this.createdAt).format('YYYY-MM-DD')
})
TopicSchema.virtual('updatedDate').get(function() {
  return moment(this.updatedAt).format('YYYY-MM-DD')
})

/**
 * TopicSchema methods
 */
TopicSchema.methods = {

	/**
	 * save topic
	 * @param {Object} options 
	 * @memberof Topic
	 */
	// save(options) {
	// 	let topic = new this(options)
	// 	topic.save()
	// },

	/**
	 * find topics
	 * @param {Number} offset - default 0
	 * @param {Number} limit - default 10
	 * @memberof Topic
	 */
	findAllAndCount(offset, limit) {
		// TODO: count
		return this.find({})
			.sort({ createdAt: -1 })
			.skip(offset)
			.limit(limit)
			.lean()
			.exec()
	},

	/**
	 * find topic
	 * @param {String} id - ObjectId 
	 * @memberof Topic
	 */
	findById(id) {
		return this.findById(id).exec()
	}
}
module.exports = mongoose.model('Topic', TopicSchema)
