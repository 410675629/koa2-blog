/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   base.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:29:46 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/10/29 23:34:38 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const moment = require('moment')

// FIXME:
module.exports = function (schema) {
  schema.methods.createdAt = function () {
    return moment(this.createdAt).format('YYYY-MM-DD HH:mm')
  }

  schema.methods.updatedAt = function () {
    return moment(this.updatedAt).format('YYYY-MM-DD HH:mm')
  }
}
