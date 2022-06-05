const express = require('express')
const router = express.Router()

const users = []

router.post('/api/user', (req, res) => {
  if (req.body && req.body.name) {
    users.push(req.body)
    return res.sendStatus(201)
  } else {
    return res.sendStatus(400)
  }
})

router.get('/api/user', (req, res) => {
  if (users.length <= 0) return res.sendStatus(404)
  return res.json(users)
})

module.exports = router
