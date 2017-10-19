/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   test.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/04 22:29:58 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/09/04 22:30:00 by JianJin Wu       ###   ########.fr       */
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
