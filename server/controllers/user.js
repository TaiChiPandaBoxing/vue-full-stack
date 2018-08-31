const User = require('../models/user.js')

exports.signup = function (req, res) {
  console.log(1234)
  const _user = req.body.user
  console.log(_user)
}