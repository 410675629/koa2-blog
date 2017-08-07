/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/06/30 23:20:16 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/08/07 22:27:11 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.end('<h1>hello world</h1>')
})
router.use('/api', require('./api'))


module.exports = router
