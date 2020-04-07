const faker = require('faker')
const { User } = require('../../src/models')

exports.User = function (merge) {
    const defaultProperties = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }

    let merged = { ...defaultProperties, ...merge }

    return User.create(merged)
}
