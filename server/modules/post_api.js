var express = require('express');
const router = express.Router();
//node-pg impl
const db = require('../datastore/datastore.js');
var moment = require('moment');
const { getIterator } = require('core-js');

console.log("Hello World without method");

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

// function getAllPost() {
//     var connectionSuccess = true;
//     router.get('/posts', (req, router_res) => {
//         var data = db
//         .query("SELECT * FROM post;")
//         .then(db_res => {
//             router_res = db_res;
//             console.log(router_res.rows);
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

router.get('/posts', function (req, res) {
    var connectionSuccess = true;
    
    var sql = "SELECT * FROM post;";

    var data = db 
        .query(sql)
        .then(db_res => {
            connectionSuccess = true;
            res.status(200).send(db_res.rows);
        })
        .catch(err => {                 // Error case
            connectionSuccess = false;
            console.log("Something from post_api /posts went wrong");
            console.error(err.stack);
            res.status(400).send(err);
        })
    console.log("grabbed something from post_api");
});

router.post('/posts', async function (req, res) {
    var connectionSuccess = true;
    console.log("BACKEND POST FUNCTION");
    // console.log(req);

    // Query for the highest pid 
    var pid_query = "SELECT pid as maximum FROM post ORDER BY pid DESC LIMIT 1 ";

    var inc = 0;

    // Async function
    var pid_data = await db
        .query(pid_query)
        .then(db_res => {
            inc = db_res.rows[0].maximum;   
            console.log(inc);
        })
        .catch(err => {
            console.log("No Yeah No")
        })
    
    var sql ="INSERT INTO post (pid, uid, message, upvote, downvote) VALUES ($1, $2, $3, $4, $5)";
    var text = req.body.text;
    var uid = req.body.uid;
    
    // console.log("whole object = " + req.body);
    // console.log("text retrieved = " + req.body.text);
    // console.log("uid retrieved = " + req.body.uid);
    // console.log("my uid = " + uid);

    var data = db
        .query(sql, [
            (inc + 1),
            uid,
            text,
            0,
            0
        ])
        .then(db_res => {
            console.log(db_res.rows)
            console.log("Post sent to backend")
        })
        .catch(e => {
            console.error(e.stack)
        })
});

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