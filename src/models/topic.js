/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   topic.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/08/07 23:53:34 by Lucky Wu        #+#    #+#             */
/*   Updated: 2017/08/07 23:53:35 by Lucky Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')
const base = require('./base')

const TopicSchema = new Schema({
	// title
	title: { type: String, required: true },
	// markdown
	markdown: { type: String, required: true },
	// html
	html: { type: String, required: true },
	// tag
	tags: { type: Array, required: true },
	// 状态 published unpublished deleted 
	state: { type: String, default: 'published' },
	// 阅读量
	readCount: { type: Number, default: 0 },
	// 置顶
	top: { type: Boolean, default: false },
	// meta
	metaTitle: { type: String },
	// meta
	metaDesc: { type: String },
	// 创建时间
	createdAt: { type: Date, default: Date.now },
	//创建人
	createdBy: { type: String, required: true, ref: 'User' },
	//修改时间
	updatedAt: { type: Date, default: Date.now },
	//修改人
	updatedBy: { type: String, required: true, ref: 'User' }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

TopicSchema.plugin(base)
TopicSchema.index({createdAt: -1}) // 降序索引

TopicSchema.virtual('createdDate').get(function() {
  return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss')
})
TopicSchema.virtual('updatedDate').get(function() {
  return moment(this.updatedAt).format('YYYY-MM-DD HH:mm:ss')
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
