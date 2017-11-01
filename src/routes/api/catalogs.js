/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   catalogs.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/11/01 00:09:23 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/11/01 00:12:02 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


const express = require('express')
const router = express.Router()

const Joi = require('joi')
const joiValidator = require('../../middlewares/joiValidator')

const catalogService = require('../../services/catalogService')

// get catalogs
router.get('/', joiValidator({
	query: {
		name: Joi.string()   	 // optional
	}
}), async (req, res) => {
	try {
		let name = req.query.name
		let data = await catalogService.getCatalogs(name)
		return res.success(data)
	}
	catch (err) {
		return res.error(err)
	}
})


module.exports = router
