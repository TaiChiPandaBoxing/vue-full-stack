const mongoose = require('mongoose') //引入Mongoose
// 加密密码模块
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
// 声明Object类型
let ObjectId = mongoose.Schema.Types.ObjectId;
// 声明Schema
const UserSchema = new mongoose.Schema({
  userId: ObjectId,
  userName: {
    unique: true,
    type: String
  },
  password: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    },
    lastLoginAt: {
      type: Date,
      default: Date.now()
    }
  }
})
module.exports = UserSchema