const express = require('express')
const User = require('../controllers/user.js')
const router = express.Router()
router.get('/', User.signup)

module.exports = router
