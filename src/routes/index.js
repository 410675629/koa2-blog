/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/06/30 23:20:16 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/09/04 22:25:35 by JianJin Wu         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.end('<h1>hello world</h1>')
})
router.use('/api', require('./api'))


module.exports = router
