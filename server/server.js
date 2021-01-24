const express    = require('express');    // Express.js is a backend web application framework for Node.js allowing for defining endpoints
const path       = require('path');       // Node.js library to work with filepaths
const cors       = require('cors');
const vueHistory = require('connect-history-api-fallback');
const apiRoutes  = require('./modules/api.js');
const post_apiRoutes = require('./modules/post_api.js');
const tags_apiRoutes = require('./modules/tags_api.js');
const user_apiRoutes = require('./modules/user_api.js');
const google_apiRoutes = require('./modules/google_api.js');

// const passport = require('passport');

require('dotenv').config();            // Loads environment variables from a local .env file

/* Constants for making the app run */
const app        = express();             // Creating the application instance


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })


/*
 * process.env is an object that contains all the environment variables loaded from a local .env file
 * This is shorthand syntax for saying if process.env.PORT exists, use that value, else use 8080
 */
const port = process.env.PORT || 8080;

/* Application Settings*/
app.use(cors());
app.use(vueHistory());                              // Re-route all unknown pages to 'index.html' for client-side routing
app.use(express.json());                            // Allow the backend to recognize an incoming Request Object as a JSON object
app.use(express.urlencoded({ extended: true }));    // Allow the backend to parse incoming Request Objects with urlencoded payloads with nesting enabled
// app.use(cookieParser());

/* Tells the application where public files like images, styling, and the minified javascript code lives */
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

/* Defines API endpoint routes prefixed with /api
    - all routes inside will be: http:localhost:[PORT]/api/[your-defined-endpoint]
*/
app.use('/api', apiRoutes); // API routes should be below '/api'
app.use('/api/post_api', post_apiRoutes);
app.use('/api/tags_api', tags_apiRoutes);
app.use('/api/user_api', user_apiRoutes);
app.use('/api/google_api', google_apiRoutes);

app.use(function (err, req, res, next) {
  status = err.status || 500
  message = err.message || 'Internal Server Error'

  console.error('[error] ' + err.stack)
  res.status(code).json({ status: status })

})

/* Start the server to listen on the defined port */
app.listen(port, () => {
  console.log('Server is running at localhost:' + port);
});
