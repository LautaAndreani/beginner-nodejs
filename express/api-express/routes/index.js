const express = require('express')
const router = express.Router()

const users = [
  { name: 'Lautaro', surname: 'Andreani', age: 21 },
  { name: 'Bill', surname: 'Gates', age: 70 },
  { name: 'Evan', surname: 'You', age: 35 },
  { name: 'Mark', surname: 'Zuckerberg', age: 32 },
  { name: 'Dan', surname: 'Abramov', age: 28 },
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/api/user', (req, res) => {
  res.json(users)
})

router.get('/api/user/cantidad', (req, res) => {
  res.json({ qty: users.length })
})

module.exports = router
