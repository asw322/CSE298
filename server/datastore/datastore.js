//node-pg interface connection

const { Pool } = require('pg')

require('dotenv').config()

console.log('[postgres] ' + process.env.NODE_ENV + 'postgres config loaded')

var config = {}
if (process.env.NODE_ENV == 'development') {  //regular env
  config = {
    host: process.env.PSQL_HOSTNAME,
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DBNAME,
  }
}
else if (process.env.NODE_ENV == 'test') {  //use test environment (No test database currently)
  console.log('testing server currently unimplimented, using main db')
  config = {
    host: process.env.PSQL_HOSTNAME,
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DBNAME,
  }
}

const pool = new Pool(config);

pool.on('connect', () => {
  console.log('[postgres] Sucessful connection to postgres instance at [' + config.host + ']');
})

const query = (text, params) => pool.query(text, params).catch(err => {throw err})

module.exports = {
  query
}
