const { User } = require('../../../src/models')

describe('Authentication', () => {
    test('Should receive JWT token when authenticated', async () => {
        const user = await User.create({
            name: 'Felipe',
            email: 'felipe.secato@gmail.com',
            password_hash: '123',
        })

        console.log(user)

        expect(user.email).toBe('felipe.secato@gmail.com')
    })
})
