const path = require('path')
const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/dumall', {
  useNewUrlParser: true
})

const index = require('./routes/index.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', index)

const server = http.createServer(app)
server.listen('8088', function () {
  console.log('server is running here: http://localhost:8088')
})