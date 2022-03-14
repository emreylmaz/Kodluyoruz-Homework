const router = require('@koa/router')();

const Koa = require('koa');
const app = module.exports = new Koa();


router.get('/index',(ctx)=>{
    ctx.body="<h1>index</h1>",
        ctx.status=200;

})

router.get('/about',(ctx)=>{
    ctx.body="<h1>Hakkimda</h1>",
        ctx.status=200;

})
router.get('/contact',(ctx)=>{
    ctx.body="<h1>iletişim </h1>",
        ctx.status=200;


})

app.use(router.routes())

const  port =3000;

app.listen(port, ()=>{
    console.log(`Server is running Port: ${port}`);
});

