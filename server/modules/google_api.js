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

    // store the response in userObj
    userObj = {
      uid: req.user.uid,
      username: req.user.username,
      tid: req.user.tid,
      dob: req.user.dob,
      gid: req.user.gid
    }

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
  // If so, return something different 

  if(userObj.uid != '') {
    console.log("")
    res.status(200).send(userObj);
  } else {
    console.log("[Google/GetInfo] Empty object sent on no login")
    res.status(400).send(userObj);
  }
  
});


module.exports = router;
