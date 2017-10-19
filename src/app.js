/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:29:52 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/09/04 22:29:55 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const log4js = require('log4js')

const routes = require('./routes/index')
const Logger = require('./utils/logger').Logger('app')

global.Promise = require('bluebird')

app.use(log4js.connectLogger(Logger, {
	level: 'INFO',
	format: ':remote-addr  :method  :url  :status  :response-time' + 'ms'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// res middleware
app.use(require('./middlewares/res'))

app.use('/', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
	Logger.error(req.method, req.originalUrl, '404')
	let err = new Error('Not Found')
	err.status = 404
	res.status(err.status)
	next()
})

module.exports = app

