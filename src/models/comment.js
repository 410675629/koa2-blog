/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   comment.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/29 23:26:45 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/10/29 23:26:46 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


const moment = require('moment')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId  = Schema.ObjectId


const CommentSchema = new Schema({
	content: { type: String, required: true },
	html: { type: String, required: true },
  topicId: { type: ObjectId },
  userId: { type: ObjectId },
	commentId: { type: ObjectId },
	// 接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞
	ups: [Schema.Types.ObjectId], // FIXME:
	deleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})

// CommentSchema.plugin(BaseModel)
// CommentSchema.index({topic_id: 1})
// CommentSchema.index({author_id: 1, create_at: -1})

CommentSchema.virtual('createdDate').get(function() {
  return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss')
})
CommentSchema.virtual('updatedDate').get(function() {
  return moment(this.updatedAt).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('Comment', CommentSchema)
