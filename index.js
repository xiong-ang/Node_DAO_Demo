const koa = require('koa');
const log = require('./middleware/log.mid');
const router = require('./router/all.router')
const ErrorRouter = require('./middleware/404.mid')
const static = require('koa-static');
const serverConfig = require('./config/server.config');

const app = new koa();

app
    .use(log)
    .use(ErrorRouter)
    .use(static(__dirname + '/view'))
    .use(router.routes())
    .listen(serverConfig.port);

console.log(`Server Running at http://localhost:${serverConfig.port}`);