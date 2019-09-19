/* koa module */
const koa = require("koa")
const router = require("koa-router")
const session = require("koa-session")
const logger = require("koa-logger")

const app = new koa()
const Route = router()

/* function */

const user = require("./user")
const commodity = require("./commodity")
const cart = require("./shoppingcart")
const payment = require("./payment")
const search = require("./search")
const order = require("./order")
const management = require("./management")

//const V = require("../View/main")

app.keys = ['My secret']

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
  .get('/', user.index)
  .get('/signup', user.signup)
  .post('/checkuser', user.checkuser)

app.use(logger())
app.use(session(CONFIG, app))
app.use(Route.routes())

async function index (ctx) {
  ctx.body = await V.index()
}

if (!module.parent) {
    app.listen(3000)
    console.log('Server run at http://localhost:3000')
  }
