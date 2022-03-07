'use strict'
require('dotenv').config();

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.HOST_DB || '127.0.0.1',
        port: process.env.PORT_DB || '3333',
        user: process.env.USER_DB || 'root',
        password: process.env.PASSWORD_DB || '123456',
        database: process.env.DB_NAME || 'jhcisdb'
    },
    debug: false,
    pool: { min: 0, max: 7 }
});

module.exports = knex