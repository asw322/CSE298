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
    var connectionSuccess = true;
    router.get('/posts', (req, res) => {
        var data = db
        .query("SELECT * FROM post;")
        .then(res => {
            console.log(res.rows);
        })
        .catch(e => {
            console.error(e.stack)
            connectionSuccess = false;
        });
    });    

    if (connectionSuccess) {
        res.status(200).json(data);
    } else {
        res.status(404).json(data);
    }
}

// Get all posts given tag
// All posts that contain given tag (can we expand to list of tags as input?)
function getPostsFromTag(tag) {
    db
        .query("SELECT * FROM post WHERE tag = " + "'" + tag + "';")
        .then(res => {
            console.log(res.rows)
            // status(200) to sent to front end
        })
        .catch(e => {
            console.error(e.stack)
            // status(404) to sent to front end
        });
}


// Get all posts given a user 
// All posts a user has created
function getPostsFromUser(user) {
    db
        .query("SELECT * FROM post WHERE user = " + "'" + user + "';")
        .then(res => {
            console.log(res.rows)
            // status(200) to sent to front end
        })
        .catch(e => {
            console.error(e.stack)
            // status(404) to sent to front end
        });
}


// Given location (via cookie) get weather condition
// Access using weather api

// I think this one can be handled via the singleton

module.exports = router;