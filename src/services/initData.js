/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   initData.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: JianJin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/30 00:25:50 by JianJin Wu        #+#    #+#             */
/*   Updated: 2017/11/01 00:01:16 by JianJin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 init databases
 */
const { Topic,User,Catalog } = require('../models')


//  TODO:

const topicOp = {
	title: '利用nvm自由切换Node版本',
	abstract: 'nvm全称是Node version management',
	content: 'nvm配置\n\n一、什么是nvm\n\nnvm全称是Node Version Manager\n\n作用：Simple bash script to manage multiple active node.js versions\nnvm是一个简单的bash脚本用来管理系统中多个已存的Node.js版本\n\ngithub网址：\nOSX和linux版本：\nhttps://github.com/creationix/nvm\nwindow版本：\nhttps://github.com/coreybutler/nvm-windows\n二、nvm配置步骤\n\n卸载掉系统中所有已经存在的所有node.js版本\n\n\n2.下载nvm包\n\n去以下网站下载nvm windows版本:\nhttps://github.com/coreybutler/nvm-windows/releases\n\n\n双击nvm-setup.exe安装，注意修改安装路径\n\n\n\n注：安装完毕后会自动配置系统环境变量中的Path，同时会产生两个特殊名称的配置：\n\nNVM_HOME ：指向nvm安装目录\nNVM_SYMLINK：nodejs安装目录\nPath ：变量值中增加 NVM_HOME 和 NVM_SYMLINK两个环境变量\n如图：\n\n\n\n\n\n\n注意：系统变量和用户变量都会有NVM_HOME 和 NVM_SYMLINK两个变量\n\n\n3.检查nvm安装成功\n在cmd中输入：nvm 出现下图既成功\n\n\n\n \n\n4.利用nvm安装nodejs\n第一步：\n查看nvm中有哪些nodejs版本可以下载，如果在下面地址中没有则下载会报错：\nhttps://github.com/coreybutler/nodedistro/blob/master/nodeversions.json\n\n第二步：\n在cmd中输入\n\n\n\nnvm默认的下载地址是http://nodejs.org/dist/，这是国外的服务器，在国内下载速度很慢。\n\n解决办法： \n在你nvm的安装路径下，找到settings.txt打开，在后面加加上\n\nnode_mirror: https://npm.taobao.org/mirrors/node/\nnpm_mirror: https://npm.taobao.org/mirrors/npm/\n\n直到将nodejs 7.0.0 版本安装完毕\n这里的安装命令其实会自动去下载两个文件：Nodejs.exe和npm包\nnodejs.exe网址：https://nodejs.org/dist\nnpm包：https://github.com/npm/npm/archive/版本号.zip\n\n第三步：\n在cmd中做如下操作来保证node可以用：\n1、 输入nvm list 查看当前所有安装好的nodejs版本\n2、 输入 nvm use 7.0.0 来使nodejs 7.0.0 版本为当前使用状态\n3、再次输入nvm list后会看到7.0.0后面多了一个标记使用的文字提醒\n\n\n\n \n\n\n\n第四步：\n在cmd中输入 node 即可使用了\n\n注意：\n\n1.安装过程可能被杀毒软件拦截，须暂时关闭杀毒软件；\n\n2.不同版本下npm安装的全局命令只能在这个版本下使用，如',
	html: '<p>nvm配置</p>\n<p>一、什么是nvm</p>\n<p>nvm全称是Node Version Manager</p>\n<p>作用：Simple bash script to manage multiple active node.js versions<br />\nnvm是一个简单的bash脚本用来管理系统中多个已存的Node.js版本</p>\n<p>github网址：<br />\nOSX和linux版本：<br />\nhttps://github.com/creationix/nvm<br />\nwindow版本：<br />\nhttps://github.com/coreybutler/nvm-windows<br />\n二、nvm配置步骤</p>\n<p>卸载掉系统中所有已经存在的所有node.js版本</p>\n<p>2.下载nvm包</p>\n<p>去以下网站下载nvm windows版本:<br />\nhttps://github.com/coreybutler/nvm-windows/releases</p>\n<p>双击nvm-setup.exe安装，注意修改安装路径</p>\n<p>注：安装完毕后会自动配置系统环境变量中的Path，同时会产生两个特殊名称的配置：</p>\n<p>NVM_HOME ：指向nvm安装目录<br />\nNVM_SYMLINK：nodejs安装目录<br />\nPath ：变量值中增加 NVM_HOME 和 NVM_SYMLINK两个环境变量<br />\n如图：</p>\n<p>注意：系统变量和用户变量都会有NVM_HOME 和 NVM_SYMLINK两个变量</p>\n<p>3.检查nvm安装成功<br />\n在cmd中输入：nvm 出现下图既成功</p>\n<p>4.利用nvm安装nodejs<br />\n第一步：<br />\n查看nvm中有哪些nodejs版本可以下载，如果在下面地址中没有则下载会报错：<br />\nhttps://github.com/coreybutler/nodedistro/blob/master/nodeversions.json</p>\n<p>第二步：<br />\n在cmd中输入</p>\n<p>nvm默认的下载地址是http://nodejs.org/dist/，这是国外的服务器，在国内下载速度很慢。</p>\n<p>解决办法：<br />\n在你nvm的安装路径下，找到settings.txt打开，在后面加加上</p>\n<p>node_mirror: https://npm.taobao.org/mirrors/node/<br />\nnpm_mirror: https://npm.taobao.org/mirrors/npm/</p>\n<p>直到将nodejs 7.0.0 版本安装完毕<br />\n这里的安装命令其实会自动去下载两个文件：Nodejs.exe和npm包<br />\nnodejs.exe网址：https://nodejs.org/dist<br />\nnpm包：https://github.com/npm/npm/archive/版本号.zip</p>\n<p>第三步：<br />\n在cmd中做如下操作来保证node可以用：<br />\n1、 输入nvm list 查看当前所有安装好的nodejs版本<br />\n2、 输入 nvm use 7.0.0 来使nodejs 7.0.0 版本为当前使用状态<br />\n3、再次输入nvm list后会看到7.0.0后面多了一个标记使用的文字提醒</p>\n<p>第四步：<br />\n在cmd中输入 node 即可使用了</p>\n<p>注意：</p>\n<p>1.安装过程可能被杀毒软件拦截，须暂时关闭杀毒软件；</p>\n<p>2.不同版本下npm安装的全局命令只能在这个版本下使用，如</p>\n',
	tags: ['js','html','node'],
	author: '59f88b6232527983301c481d',
	catalog: '59f88b6232527983301c481c'
}

const userOp = {
	nickname: 'wujianjin',
	email: 'mosaic101@foxmail.com',
	pwd: '123456',
	avatarUrl: 'http://asdasdas.com'
}

// const catalogOp = {
// 	name: 'javaScript'
// }
const catalogOp = [
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

let createTopic = () => {
	Topic.create(topicOp)
}
let createUser = () => {
	let user = new User(userOp)
	user.save()
}

let createCatalog = () => {
	Catalog.create(catalogOp)
}

// createTopic()
// createCatalog()
// createUser()


