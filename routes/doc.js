const Router = require('koa-router')
const path = require('path')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'enjo',
  password: 'enjo123',
  database: 'doc_db',
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

router.get('/doc', handleDoc)


module.exports = router