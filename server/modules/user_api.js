var express = require('express');
const router = express.Router();
//node-pg impl
const db = require('../datastore/datastore.js');
var moment = require('moment');

// Get all tags given user
// All tags a user is following 
function getAllUserTags(user) {
    var connectionSuccess = true;
    router.get('/posts', (req, router_res) => {
        var data = db
        .query("SELECT tag"  + " FROM post_tags WHERE user ='" + user + "';")
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