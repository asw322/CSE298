var express = require('express');
const router = express.Router();
//node-pg impl
const db = require('../datastore/datastore.js');
var moment = require('moment');

// Get all tags given user
// All tags a user is following 
function isValidTag(tag) {
    db
        .query("SELECT Tag"  + " FROM post_tags WHERE Tag ='" + tag + "'")
        .then(res => {
            console.log(res.rows)
            // status(200) to sent to front end
        })
        .catch(e => {
            console.error(e.stack)
            // status(404) to sent to front end
        });
}

module.exports = router;