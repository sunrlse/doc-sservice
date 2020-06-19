const Router = require('koa-router')
const markdowner = require('markdown-it')
const path = require('path')
const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'enjo',
//   password: 'enjo123',
//   database: 'doc_db',
// })

const md = new markdowner({
  html: true,
  prefix: 'ob-'
})


const router = new Router({
  prefix: '/api/v1'
})

const handleDoc = async (ctx) => {
  let data
  connection.connect()
  connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error
    data = results[0].solution
    console.log('The solution is : ', results[0].solution)
  })
  connection.end()
  ctx.body = data
}


const handleMd = async (ctx) => {
  let id = ctx.request.id
  let data = `# 一级标题\n## 二级标题\n### 三级标题\n| col11111 | col2 | col222223 |\n| :- | :-: | -: |\n| 1 | d | a |\n| 1 | x | a |\n#### 四级标题\n##### **五级标题**\n![Lark20200512154957.png](http://localhost:8087/image/Lark20200512154957.png)\n###### 六级标题\n<video src="http://localhost:8087/video/est.mp4" controls="" controlslist="nodownload" oncontextmenu="return false" alt="est.mp4"></video>\n`
  let html = md.render(data)
  ctx.body = {
    code: 0,
    html: html
  }
}

router.get('/doc', handleDoc)


router.get('/md/1', handleMd)




module.exports = router