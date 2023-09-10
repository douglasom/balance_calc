'use strict'

const hostname = '127.0.0.1';
const port = 3000;

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

require('./routes/spent')(app, express);
require('./routes/get_balance')(app, express);

// Tell our app to listen on port 3000
app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log(`Server running at http://${hostname}:${port}/`);
})