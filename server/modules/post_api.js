var express = require('express');
const router = express.Router();
//node-pg impl
const db = require('../datastore/datastore.js');
var moment = require('moment');
const { getIterator } = require('core-js');

console.log("Hello World without method");

//node-pg connect through datastore.js pool 
//DB QUERY TEMPLATE, FOLLOW THIS ALAN 😁
// db.query('SELECT *', [req.params.id], (err, res) => {
//   if (err) {
//     return next(err)
//   }
//   res.send(res.rows[0])
// })


// Get all posts 
// All posts in the database
// db.query('SELECT * FROM post', (err, res) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(res);
//         res.send(res.rows[0]);
//     }    
// });

// db.end();

function getAllPost() {
    db
        .query("SELECT * FROM post")
        .then(res => {
            console.log(res.rows)
            // status(200) to sent to front end
        })
        .catch(e => {
            console.error(e.stack)
            // status(404) to sent to front end
        });
}






// Get all posts given list of tags
// All posts that contain one of the given tags 


// Get all posts given a user 
// All posts a user has created



// Given location (via cookie) get weather condition
// Access using weather api


module.exports = router;