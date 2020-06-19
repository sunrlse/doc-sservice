const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const router = new Router({
  prefix: '/api/v1'
})


router.get('/download', ctx => {
  console.log('======================')
  console.log(ctx.query)
  let name = ctx.query.name
  console.log(name)
  let filePath = path.join(__dirname, '../static/image/', name);
  console.log('======================')
  let fReadStream = fs.createReadStream(filePath);
  ctx.set({
      "Content-type": "application/octet-stream",
      "Content-Disposition": "attachment;filename=" + encodeURI(name)
  });

  fReadStream.once("data", (chunk) => {
    ctx.res.write(chunk, "binary")
  });

})

module.exports = router