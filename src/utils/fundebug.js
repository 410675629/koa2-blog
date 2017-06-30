/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   fundebug.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/05/24 13:58:44 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/06/30 13:57:03 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fundebug = require('fundebug-nodejs')

// FIXME: config
fundebug.config({
	apikey: '39609f21a72aaa89f25bdd7db2fbe28ad4eabd88242d1be9d62d499f6242ee34',
	slient: false,
	releaseStage: 'production'
})


module.exports = {

	notify: (name, message, option) => {
		name ? name : 'Prod'
		message ? message : 'no message'
		fundebug.notify(name, message, option)
	},
	
	notifyError: (err, option) => {
		if (err && err instanceof Error) {
			fundebug.notifyError(err, option)
		}
	}
}
