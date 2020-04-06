module.exports = {
    host: '127.0.0.1',
    username: 'postgres',
    password: 'docker',
    database: 'tdd',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
}
