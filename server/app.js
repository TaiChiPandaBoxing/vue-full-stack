const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/dumall', {
  useNewUrlParser: true
})

const index = require('./routes/index.js')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
app.use('/', index)

app.listen('8088', function () {
  console.log('server is running here: http://localhost:8088')
})