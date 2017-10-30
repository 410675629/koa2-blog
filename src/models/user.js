/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:27:03 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/10/31 00:34:13 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const moment = require('moment')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	nickname: { type: String, required: true },
	email: { type: String, required: true },
	pwd: { type: String, required: true, trim: true },
	// 签名
	signature: { type: String }, 	
	avatarUrl: { type: String },
	// active
	status: { type: String, default: 'active' },
	deleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Number, default: Date.now }
})

UserSchema.virtual('createdDate').get(function() {
  return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss')
})
UserSchema.virtual('updatedDate').get(function() {
  return moment(this.updatedAt).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('User', UserSchema)
