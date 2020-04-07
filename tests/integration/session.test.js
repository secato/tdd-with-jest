const request = require('supertest')

const { User } = require('../../src/models')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

beforeEach(async () => {
    await truncate()
})

describe('Authentication', () => {
    test('Should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Felipe',
            email: 'felipe.secato@gmail.com',
            password: '123123',
        })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: '123123',
        })

        expect(response.status).toBe(200)
    })

    test('Should not authenticate with invalid credentials', async () => {
        const user = await User.create({
            name: 'Felipe',
            email: 'felipe.secato@gmail.com',
            password: '123123',
        })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: '123456',
        })

        expect(response.status).toBe(401)
    })

    test('Should return jwt token when authenticated', async () => {
        const user = await User.create({
            name: 'Felipe',
            email: 'felipe.secato@gmail.com',
            password: '123123',
        })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: '123123',
        })

        expect(response.body).toHaveProperty('token')
    })
})
