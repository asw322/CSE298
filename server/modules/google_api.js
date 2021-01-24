var express = require('express');
const router = express.Router();
// require('./passport.js')(passport);


// Copied from passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// from alan's google dev project
const GOOGLE_CLIENT_ID = "395077340227-7r0a6fmmamjb217rn1s7hmfhlukojesh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "DlaWMm0t6_JBvzRGHFYZPh2S";
const CALLBACK_URL = "http://localhost:8080/api/google_api/google/callback";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
  },
  function(accessToken , refreshToken, profile, done) {
    return done(null, profile);
  }
));



const db = require('../datastore/datastore.js');
var moment = require('moment');
const { getIterator } = require('core-js');

console.log("Hello world from google api");

router.get('/google',
    // Opens up google window pop up in front end
    passport.authenticate('google', { 
        scope: [
            'profile', 
            'email'
        ]
    })
);

router.get('/google/callback', passport.authenticate('google'),
  function(req, res) {
    // Call your backend


    console.log("in google callback");
    console.log(res);
  }
);


































module.exports = router;