/**
 * Created by mosaic101 on 2016/7/14.
 * intro: routes of blog
 */
const router = require('koa-router')();
const _ = require('lodash');
const topicService = require('../services/topicService');


//home
router.get('/',async (ctx,next) => {
    let offset = ctx.params.offset || 0;
    let limit = ctx.params.limit || 10;
    let where = {state: 'published'};
    try {
        let topic = await topicService.list(where, offset, limit);
        await ctx.render('./topic/list', {
            title:'吴建金的博客',
            topic: topic
        });
    }catch (err) {
        ctx.error(err);
    }
});

//detail
router.get('/:id', async (ctx,next) => {
    let id = ctx.params.id;
    if (!id || !_.isString(id)) {
        ctx.body = {
            tag:'error',
            status:-1,
            message:'参数错误!'
        };
    }
    try {
        let topic = await topicService.one(id);
        await ctx.render('./topic/detail', {
            title: topic.title,
            topic: topic
        });
    }catch (err) {
        ctx.error(err);
    }
});

module.exports = router