/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   base.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/08/16 00:11:57 by Lucky Wu          #+#    #+#             */
/*   Updated: 2017/08/16 00:16:58 by Lucky Wu         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const moment = require('moment')

module.exports = function (schema) {
  schema.methods.createdAt = function () {
		console.log(111111);
    return moment(this.createdAt).format('YYYY-MM-DD HH:mm')
  }

  schema.methods.updatedAt = function () {
    return moment(this.updatedAt).format('YYYY-MM-DD HH:mm')
  }
}
