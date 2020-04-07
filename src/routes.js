const routes = require('express').Router()

const { User } = require('./models')
const auth = require('./middlewares/auth')

const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.store)

routes.use(auth)

routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
})

module.exports = routes
