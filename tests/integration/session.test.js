const request = require('supertest')

const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../utils/factory')

beforeEach(async () => {
    await truncate()
})

describe('Authentication', () => {
    test('Should authenticate with valid credentials', async () => {
        const user = await factory.User({ password: '123123' })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: '123123',
        })

        expect(response.status).toBe(200)
    })

    test('Should not authenticate with invalid credentials', async () => {
        const user = await factory.User({ password: '123456' })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: '123123',
        })

        expect(response.status).toBe(401)
    })

    test('Should return jwt token when authenticated', async () => {
        const user = await factory.User({ password: '123123' })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: '123123',
        })

        expect(response.body).toHaveProperty('token')
    })

    test('Should be able to access private routes when authenticated', async () => {
        const user = await factory.User({ password: '123123' })

        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer ${user.generateToken()}`)

        expect(response.status).toBe(200)
    })

    test('Should not access private routes when unauthenticated', async () => {
        const response = await request(app).get('/dashboard')

        expect(response.status).toBe(401)
    })

    test('Should not access private routes with invalidated token', async () => {
        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer 21321312`)

        expect(response.status).toBe(401)
    })
})
