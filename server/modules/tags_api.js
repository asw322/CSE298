var express = require('express');
const router = express.Router();
//node-pg impl
const db = require('../datastore/datastore.js');
var moment = require('moment');

// Specific for uid
router.get('/tags/:id', function (req, res) {
    var connectionSuccess = true;
    
    var sql = "SELECT * FROM user_channel WHERE uid=$1";
    var data = db 
        .query(sql, [req.params.id])
        .then(db_res => {
            connectionSuccess = true;
            res.status(200).send(db_res.rows);
        })
        .catch(err => {                 // Error case
            connectionSuccess = false;
            console.error(err.stack);
            res.status(400).send(err);
        })
    console.log("grabbed something from tags_api");
});

// Overall function
router.get('/tags', function (req, res)  {
    var connectionSuccess = true;

    var sql = "SELECT * FROM user_channel";

    // Asynchronous function 
    var data = db
        .query(sql)
        .then(db_res => {
            connectionSuccess = true;
            res.status(200).send(db_res.rows);
        })
        .catch(err => {
            connectionSuccess = false;
            console.log("Something from tags_api /tags went wrong");
            res.status(400).send(err);
        });
});


// Get all tags
// Return all tags that have been created 
function getAllTags() {
    var connectionSuccess = true;
    router.get('/posts', (req, router_res) => {
        var data = db
        .query("SELECT * FROM post")
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

// Post true/false given a tag
// Verify whether a tag exists in the database
function isValidTag(tag) {
    var connectionSuccess = true;
    router.get('/posts', (req, router_res) => {
        var data = db
        .query("SELECT Tag"  + " FROM post_tags WHERE Tag ='" + tag + "'")
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

module.exports = router;