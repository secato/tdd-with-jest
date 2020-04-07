const bcrypt = require('bcryptjs')
const truncate = require('../utils/truncate')
const factory = require('../utils/factory')

describe('User tests', () => {
    beforeEach(async () => {
        await truncate()
    })

    test('Should encrypt user password', async () => {
        const password = '123123'

        const user = await factory.User({ password })

        const hash = await bcrypt.hash(password, 8)
        const passwordEquals = await bcrypt.compare(
            password,
            user.password_hash
        )
        expect(passwordEquals).toBeTruthy()
    })
})
