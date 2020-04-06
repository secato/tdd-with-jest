const express = require('express')
const app = express()
const routes = require('./routes')

// middlewares
app.use(express.json())

// routes
app.use(routes)

module.exports = app
