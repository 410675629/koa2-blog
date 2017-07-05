# m-blog

rebuild my blog project

## Features

1. topics
2. home page
3. message board
4. open project
5. search 
6. chatroom

 

## Models

### Topics 

```json
//自定义序列号 依次递增
fid: { type: Number, required: true },
//title
title: { type: String, required: true },
//别名
slug: { type: String, required: true },
//分类
type: { type: String, default: 'default' },
//markdown
markdown: { type: String, required: true },
//html
html: { type: String, required: true },
//状态
state: { type: String, default: 'published' },
//阅读量
readCount: { type: Number, default: 0 },
//置顶 0:不置顶 1:置顶
top: { type: Number, default: 0 },
//images数组
images: { type: Array, required: false },
//meta
metaTitle: { type: String, required: false },
//meta
metaDesc: { type: String, required: false },
//创建时间
createdAt: { type: Date, default: Date.now },
//创建人
createdBy: { type: String, required: true, ref: 'User' },
//修改时间
updatedAt: { type: Number, default: Date.now },
//修改人
updatedBy: { type: String, required: true, ref: 'User' }
```

### Users


## APIs

### Topics

create new topic
```http
POST /topics
```
request 
```json
body {
	
}
```
return success or error

get one topic
```http
GET /topics/:id
```
response 
```json
{
	
}
```



