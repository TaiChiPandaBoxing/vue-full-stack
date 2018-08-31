const express = require('express')
const User = require('../controllers/user.js')
const router = express.Router()

router.post('/register', User.signup)

module.exports = router
