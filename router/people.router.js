const router = require('koa-router')();
const controller = require('../APP/Controller/app');

router.get('/get/:id', async ctx=>{
    let people = await controller.getPeople(parseInt(ctx.params.id));
    ctx.body = JSON.stringify(people);
});
router.get('/', async ctx=>{
    let allPeople = await controller.getAllPeople();
    ctx.body = JSON.stringify(allPeople);
});
router.get('/add', async ctx=>{
    await controller.addPeople();
    ctx.body = 'add a people';
});

module.exports = router;