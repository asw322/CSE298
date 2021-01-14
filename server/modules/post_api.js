var express = require('express');
const router = express.Router();
//node-pg impl
const db = require('../datastore/datastore.js');
var moment = require('moment');
const { getIterator } = require('core-js');

console.log("Hello World without method");


router.get('/', function (req, res) {
    console.log("hello workedd");
    res.send('hello world');
});



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
    router.get('/posts', (req, router_res) => {
        var data = db
        .query("SELECT * FROM post;")
        .then(db_res => {
            router_res = db_res;
            console.log(router_res.rows);
        })
        .catch(e => {
            console.error(e.stack)
            connectionSuccess = false;
        });

        if (connectionSuccess) {
            router_res.status(200).json(data);
        } else {
            router_res.status(404).json(data);
        }
    });
}

// getAllPost();


function test_getAllPost() {
    var connectionSuccess = true;
    router.get('/posts', (req, router_res) => {
        console.log("hello tester");
    });
}

// test_getAllPost();

// Get all posts given tag
// All posts that contain given tag (can we expand to list of tags as input?)
// function getPostsFromTag(tag) {
//     var connectionSuccess = true;
//     router.get('/posts', (req, router_res) => {
//         var data = db
//         .query("SELECT * FROM post WHERE tag = " + "'" + tag + "';")
//         .then(db_res => {
//             router_res = db_res;
//             console.log(res.rows);
//         })
//         .catch(e => {
//             console.error(e.stack)
//             connectionSuccess = false;
//         });

//         if (connectionSuccess) {
//             router_res.status(200).json(data);
//         } else {
//             router_res.status(404).json(data);
//         }
//     });
// }

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
// getPostsFromTag("cooking");

// Get all posts given a user 
// All posts a user has created
function getPostsFromUser(tag) {
    var connectionSuccess = true;
    router.get('/posts', (req, router_res) => {
        var data = db
        .query("SELECT * FROM post WHERE user = " + "'" + user + "';")
        .then(db_res => {
            router_res = db_res;
            console.log(res.rows);
        })
        .catch(e => {
            console.error(e.stack)
            connectionSuccess = false;
        });

        if (connectionSuccess) {
            router_res.status(200).json(data);
        } else {
            router_res.status(404).json(data);
        }
    });
}


// Given location (via cookie) get weather condition
// Access using weather api

// I think this one can be handled via the singleton

module.exports = router;