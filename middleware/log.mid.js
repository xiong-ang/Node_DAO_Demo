const logger = require('../logs/logger')
module.exports = async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    logger.write(`${new Date()}: ${ctx.method} ${ctx.url} - ${rt}`);
};