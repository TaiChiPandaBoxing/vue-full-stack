const User = require('../models/user.js')

exports.signup = function (req, res) {
  const _user = req.body.user
  console.log(_user)
}