const express = require('express');
const router = express.Router();
require('./passport.js');


// Copied from passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');

// from alan's google dev project
// const GOOGLE_CLIENT_ID = "395077340227-7r0a6fmmamjb217rn1s7hmfhlukojesh.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "DlaWMm0t6_JBvzRGHFYZPh2S";
// const CALLBACK_URL = "http://localhost:8080/api/google_api/google/callback";

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: CALLBACK_URL,
//   },
//   function(accessToken , refreshToken, profile, done) {
//     return done(null, profile);
//   }
// ));

router.use(cookieSession({
  name: 'file-session',
  keys: ['key1', 'key2']
}));

router.use(passport.initialize());
router.use(passport.session());

const db = require('../datastore/datastore.js');
var moment = require('moment');
const { getIterator } = require('core-js');

console.log("Hello world from google api");


var userObj = {
  uid: '',
  username: '',
  tid: '',
  dob: '',
  gid: ''
}


router.get('/google',
    // Opens up google pop up in front end
    passport.authenticate('google', { 
        scope: [ 
            'profile', 
            'email'
        ]
    })
);

router.get('/google/callback', passport.authenticate('google'),
  function(req, res) {
    console.log("in google callback");

    var returnedObj = req.user;
    const sql = "SELECT * FROM users WHERE gid = $1";

    const data = db
      .query(sql, [returnedObj.id])
      .then(db_res => {
        var userInfo = db_res.rows[0];
        userObj = {
          uid: userInfo.uid,
          username: userInfo.username,
          tid: userInfo.tid,
          dob: userInfo.dob,
          gid: userInfo.gid
        }
      })
      .catch(err => {
        console.error(err.message);
      })

    // store the response in userObj
    

    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

router.get('/getGoogleInfo', function (req, res) {
  // Check if the userObj is the default object 
  // If so, return default object

  if(userObj.uid != '') {
    console.log("Sending google login data to front end");

    // console.log(userObj);
    res.status(200).send(userObj);
  } else {
    console.log("[Google/GetInfo] Empty object sent on no login");
    // we may choose to send something else in the future
    res.status(400).send(userObj);
  }
  
});


module.exports = router;
