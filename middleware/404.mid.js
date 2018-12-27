const logger = require('../logs/logger')
module.exports = async (ctx, next) => {
    await next();
    if (ctx.status == 404) {
        ctx.body = '<h1>404</h1>'
        logger.write(`${new Date()}: 404`);
    }
};