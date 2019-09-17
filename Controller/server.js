/* koa module */
const koa = require("koa")
const router = require("koa-router")
const session = require("koa-session")
const logger = require("koa-logger")
const koastatic = require("koa-static")

const app = new koa()
const Route = router()

app.keys = ['some secret hurr']

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}

Route
  .get('/index', index)

app.use(logger())
app.use(koastatic('../View'))
app.use(session(CONFIG, app))
app.use(Route.routes())

/* function */

const user = require("./user")
const commodity = require("./commodity")
const cart = require("./shoppingcart")
const payment = require("./payment")
const search = require("./search")
const order = require("./order")
const management = require("./management")


async function index(ctx) {
  ctx.body = {content:"Hello world!"}
  ctx.status = 200
}



if (!module.parent) {
    app.listen(3000)
    console.log('Server run at http://localhost:3000')
  }
