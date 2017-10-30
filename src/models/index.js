/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:28:57 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/10/31 00:38:47 by JianJin Wu       ###   ########.fr       */
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
	User: require('./user'),
	Catalog: require('./catalog'),
	Comment: require('./comment')
}
