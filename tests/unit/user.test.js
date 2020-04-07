const bcrypt = require('bcryptjs')
const { User } = require('../../src/models')
const truncate = require('../utils/truncate')

describe('User tests', () => {
    beforeEach(async () => {
        await truncate()
    })

    test('Should encrypt user password', async () => {
        const password = '123123'
        const user = await User.create({
            name: 'Felipe',
            email: 'felipe.secato@gmail.com',
            password: password,
        })

        const hash = await bcrypt.hash(password, 8)
        const passwordEquals = await bcrypt.compare(
            password,
            user.password_hash
        )
        expect(passwordEquals).toBeTruthy()
    })
})
