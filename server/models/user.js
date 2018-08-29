const mongoose = require('mongoose')
const UserSchema = require('../schemas/user.js')

// Mongoose的model方法有四个参数：name为模型model的名称；
// schema为mongodb的document映射的schema；
// collection为真正的collection名称；
// skipInit为是否跳过初始化，默认为false.
// 当collection缺失时，该方法会将name参数根据一定的规则转换成Mongodb中的collection的名称。
const User = mongoose.model('User', UserSchema, 'users')
module.exports = User