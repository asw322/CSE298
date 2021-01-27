var express = require('express');
const router = express.Router();
//node-pg impl
const db = require('../datastore/datastore.js');
var moment = require('moment');
const { getIterator } = require('core-js');

console.log("Hello World without method");

router.get('/location/:id', function (req, res) {
    var connectionSuccess = true

    var sql = "SELECT city, state FROM users WHERE UID=$1";
    var data = db 
        .query(sql, [req.params.id])
        .then(db_res => {
            connectionSuccess = true;
            res.status(200).send(db_res.rows);
        })
        .catch(err => {                 // Error case
            connectionSuccess = false;
            console.log("Something from location_api/location went wrong");
            console.error(err.stack);
            res.status(400).send(err);
        })
    console.log("grabbed something from location_api");
});

router.put('/location/:id', async function (req, res) {
    var connectionSuccess = true;

    var sql ="UPDATE users SET city = $1, country = $2 WHERE uid = $3";
    
    var data = db
        .query(sql, [
            req.body.city,
            req.body.country,
            req.params.id
        ])
        .then(db_res => {
            console.log(db_res.rows)
            res.status(200).send(db_res.rows);
            console.log("Post sent to backend")
        })
        .catch(e => {
            console.error(e.stack)
            res.status(400).send(err.message);
        })
});

module.exports = router;