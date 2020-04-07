const { User } = require('../../src/models')

exports.User = function (merge) {
    const defaultProperties = {
        name: 'Felipe',
        email: 'felipe.secato@gmail.com',
        password: '123123',
    }

    let merged = { ...defaultProperties, ...merge }

    return User.create(merged)
}
