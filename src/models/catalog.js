/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   catalog.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/29 23:26:35 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/10/29 23:59:32 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CatalogSchema = new Schema({
	name: { type: String, required: true },
	deleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Catalog', CatalogSchema)
