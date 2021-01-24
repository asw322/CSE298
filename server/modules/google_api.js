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

const isLoggedIn = (req, res, next) => {
  if(req.user) {
    console.log("user is logged in already");
    next();
  } else {
    res.sendStatus(401);
  }
}

router.use(passport.initialize());
router.use(passport.session());



const db = require('../datastore/datastore.js');
var moment = require('moment');
const { getIterator } = require('core-js');

console.log("Hello world from google api");


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
    // Call your backend

    console.log("in google callback");
    console.log(req);
    console.log(res);
    // res.redirect('/good');
  }
);

router.get('api/google_api/good', isLoggedIn, (req, res) => res.send(`Welcome to our project`));


router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})


module.exports = router;


/**
 * http://localhost:8080
 * /api/google_api/google/callback
 * ?code=4%2F0AY0e-g4DXcVyaCib2T63mDqUa5N79ZAI6uTZTs2OSBkzVycU9wxdWQcig25L2-dlKO0Oaw&scope=email%20profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20openid&authuser=1&prompt=consent
 */