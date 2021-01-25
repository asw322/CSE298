const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../datastore/datastore.js');

// called after callback function handler executes
// makes the cookie smaller 
passport.serializeUser(function(user, done) {
    done(null, user.id);
    // done(null, user);
});

passport.deserializeUser(function(gid, done) {
    // do the same thing as in callback function handler 

    console.log("gid = " + gid);

    const sql = "SELECT * FROM users WHERE gid = $1";

    const data = db
        .query(sql, [gid])
        .then(db_res => {
            console.log(db_res.rows);
            done(null, data);
        })
        .catch(err => {
            console.log(err.stack);
            done(err, null);
        })
});


// from alan's google dev project
const GOOGLE_CLIENT_ID = "395077340227-7r0a6fmmamjb217rn1s7hmfhlukojesh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "DlaWMm0t6_JBvzRGHFYZPh2S";
const CALLBACK_URL = "http://localhost:8080/api/google_api/google/callback";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
  },
  // callback function handler
  // triggered when user login is successful
  function(accessToken , refreshToken, profile, done) {
    // use profile info (mainly profile id if the user is registered in the db)
    return done(null, profile);
  }
));
