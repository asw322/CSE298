/**
 * This is a simple unit test on the connection for Haroku postgres database using a client object 
 * The goal is to be able to establish conneciton, make a simple query, and output it to console
 */

console.log("hello word");

const { Client } = require('pg');

require('dotenv').config();

console.log('[postgres] ' + process.env.NODE_ENV + 'postgres config loaded');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

const db = client; 

client.query('SELECT * FROM users', (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
  })