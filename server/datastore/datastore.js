//node-pg interface connection

// const { Pool } = require('pg')
const { Client } = require('pg')

require('dotenv').config()

console.log('[postgres] ' + process.env.NODE_ENV + 'postgres config loaded')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// var config = {}
// if (process.env.NODE_ENV == 'development') {  //regular env
  
// }
// else if (process.env.NODE_ENV == 'test') {  //use test environment (No test database currently)
//   console.log('testing server currently unimplimented, using main db')
//   const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// }

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected to heroku psql')
  }
});

// NOTE: THIS QUERY WORKS 
// client.query('SELECT * FROM users', (err, res) => {
//   if (err) throw err
//   console.log(res)
//   client.end()
// })

// client.query('SELECT * FROM employees', (err, res) => {
//   if (err) throw err
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

// const pool = new Pool(config);

// pool.on('connect', () => {
//   console.log('[postgres] Sucessful connection to postgres instance at [' + config.host + ']');
// })

// change to pool later 
// const query = (text, params) => pool.query(text, params).catch(err => {throw err});
const query = (text, params) => client.query(text, params).catch(err => {throw err});
const end = (text, params) => client.end().catch(err => {throw err});

module.exports = {
  query,
  end
}
