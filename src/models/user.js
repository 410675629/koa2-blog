/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/08/07 23:49:43 by Lucky Wu        #+#    #+#             */
/*   Updated: 2017/08/07 23:53:46 by Lucky Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true, trim: true },
	description: { type: String, required: false },
	avatarUrl: { type: String, required: false },
	state: { type: String, default: 'active' },
	lastLogin: { type: Date, default: Date.now },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Number, default: Date.now }
})


module.exports = mongoose.model('User', UserSchema)
