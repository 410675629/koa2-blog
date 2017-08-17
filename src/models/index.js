/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/07/01 02:22:36 by Lucky Wu        #+#    #+#             */
/*   Updated: 2017/08/07 23:59:27 by Lucky Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose')
const { mongoDB } = require('getconfig')

//use native promises Instead of mpromise //mongoose return mpromise
mongoose.Promise = global.Promise

//connect mongodb's database
mongoose.connect(mongoDB, {
	config: { autoIndex: false }, // close ensureIndex
	server: { poolSize: 20 } 
}, err => {
	if (err) {
		// logger.error('connect to %s error: ', DATABASE_URL, err.message);
		process.exit(1)
	}
})

module.exports = {
	Topic: require('./topic'),
	User: require('./user')
}
