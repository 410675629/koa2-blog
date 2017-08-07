/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   test.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Lucky Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/07/16 23:26:48 by Lucky Wu        #+#    #+#             */
/*   Updated: 2017/07/17 00:10:09 by Lucky Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
			console.log(i);
        arr.push(function () {
					console.log(i);
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(results);
console.log(f1(), f2(), f3());
