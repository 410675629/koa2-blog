/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/07/01 02:22:36 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/07/01 02:26:45 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose')
const { mongodb } = require('getconfig')

//use native promises Instead of mpromise //mongoose return mpromise
mongoose.Promise = global.Promise

//connect mongodb's database
mongoose.connect(mongodb, { server: { poolSize: 20 } }, err => {
	if (err) {
		//FIXME: 添加logger日志
		// logger.error('connect to %s error: ', DATABASE_URL, err.message);
		process.exit(1)
	}
})

exports.Topic = require('./topic')
exports.User = require('./user')
