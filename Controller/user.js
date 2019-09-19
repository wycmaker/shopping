const M = require('../Model/user')
const V = require('../View/main')

const user = module.exports = {}

user.index = async (ctx) => {
    ctx.body = await V.index()
  }

user.signup = async (ctx) => {
    ctx.body = await V.signup()
}

user.checkuser = async (ctx) => {
    ctx.redirect('/')
}