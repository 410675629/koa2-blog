/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   base.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:29:46 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/09/04 22:29:48 by JianJin Wu       ###   ########.fr       */
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
