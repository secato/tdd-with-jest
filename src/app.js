const dotenv = require('dotenv')
const express = require('express')
const routes = require('./routes')
const app = express()

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

// middlewares
app.use(express.json())

// routes
app.use(routes)

module.exports = app
