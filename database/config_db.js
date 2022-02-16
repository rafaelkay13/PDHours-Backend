const { Pool } = require('pg')

const credentials = {
    user: 'postgres',
    host: 'localhost',
    database: 'pdhours',
    password: 'rk13y',
    port: 5432
}

const pool = new Pool(credentials);

module.exports = {pool};