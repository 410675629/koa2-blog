/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/08/07 23:49:43 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/08/07 23:53:46 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserSchema = new Schema({
	//自定义序列号 依次递增
	// fid: { type: Number, required: true },
	name: { type: String, required: true },
	slug: { type: String, required: false },
	email: { type: String, required: true },
	password: { type: String, required: true, trim: true },
	headImg: { type: String, required: false },
	state: { type: String, default: 'active' },
	location: { type: String, required: false },
	lastLogin: { type: Date, default: Date.now },
	metaTitle: { type: String, required: false },
	metaDesc: { type: String, required: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Number, default: Date.now }
})


module.exports = mongoose.model('User', UserSchema)
