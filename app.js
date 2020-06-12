const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const koaBody = require('koa-body')
const cors = require('./libs/koa-cors')
const upload = require('./routes/upload')

const app = new Koa()
app.use(koaBody({ multipart: true }))
app.use(static(path.join(__dirname) + '/static'))
app.use(cors)

app.use(upload.routes(), upload.allowedMethods())

app.listen(8087, () => {
  console.log('api server is running at http://localhost:8087')
})