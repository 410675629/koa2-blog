/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   initData.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/30 00:25:50 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/10/31 00:38:06 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 init databases
 */
const { Topic,User,Catalog } = require('../models')

//  TODO:

const owner = {
	nickname: 'wujianjin'
}


const catalogs = [
	{
		name: 'javaScript'
	},
	{
		name: 'node'
	},
	{
		name: '架构之路'
	},
	{
		name: 'html'
	},
	{
		name: 'css'
	}
]
