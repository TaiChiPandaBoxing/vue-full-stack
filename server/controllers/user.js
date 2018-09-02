const User = require('../models/user.js')

exports.signup = function (req, res, next) {
  const _user = req.body.user
  res.send({
    data: 1234
  })
  next()
}