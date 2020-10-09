import Koa from "koa";
import Server from "koa-static-server";
import Route from "@koa/router";

const app = new Koa();
// console.log(app)
const router = new Route();

router.get("/:name?", ctx => {
    const { name = "typescript" } = ctx.params;
    ctx.body = {
        action:"hello",
        message:`hello ${name}`
    }
});


app.use(router.routes());
app.use(Server({
    rootDir:`${__dirname}/public`,
    index:"index.html"
}));

app.listen(80, () => {
    console.log("Server: httP://localhost/")
});