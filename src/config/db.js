const dotenv = require('dotenv')

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

module.exports = {
    host: process.env.DB_HOME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || 'postgres',
    storage: './tests/db.sqlite',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
}
