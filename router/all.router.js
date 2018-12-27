const router = require('koa-router')();
const index = require('./index.router');
const people = require('./people.router');

router.use('/', index.routes(), index.allowedMethods());
router.use('/people', people.routes(), people.allowedMethods());

module.exports = router;