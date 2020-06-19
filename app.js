const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const koaBody = require('koa-body')
const cors = require('./libs/koa-cors')
const doc = require('./routes/doc')
const upload = require('./routes/upload')
const download = require('./routes/download')
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

const app = new Koa()

// app.use(historyApiFallback({
//   htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
// }));

app.use(static(path.join(__dirname) + '/static'))
// app.use(static(path.join(__dirname) + '/frontend/dist'))
app.use(koaBody({ multipart: true }))
app.use(cors)

app.use(doc.routes(), doc.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())
app.use(download.routes(), download.allowedMethods())

app.listen(8087, () => {
  console.log('api server is running at http://localhost:8087')
})