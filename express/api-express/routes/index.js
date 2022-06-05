const express = require('express')
const router = express.Router()

const users = []
let counter = 0

// Create user
router.post('/api/user', (req, res) => {
  if (req.body && req.body.name) {
    const { name, surname } = req.body
    counter = counter + 1
    users.push({
      name,
      surname,
      id: counter,
    })
    return res.sendStatus(201)
  } else {
    return res.sendStatus(400)
  }
})

// Get users if exists
router.get('/api/user', (req, res) => {
  if (users.length <= 0) return res.sendStatus(404)
  return res.json(users)
})

// Get only a user if exist
router.get('/api/user/:id', (req, res) => {
  const { id } = req.params
  const user = users.find((val) => val.id === Number(id))

  if (user) return res.json(user)

  return res.sendStatus(404)
})

module.exports = router
