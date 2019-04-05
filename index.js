'use strict'

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

// Create an Express app
const app = express();

// Server port / Database URI / Secret key
const { PORT, DB, SECRET_KEY } = require('./config');

// Database connection
mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => console.log('Database is connected'))
  .catch(error => console.log(error));

// Database sessions
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Set up cart sessions
app.use(session({
  secret: SECRET_KEY,
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // 7 days in ms
  store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 60 * 60 * 24 * 7 })
}));

// HTTP headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from client app
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes
app.use('/api', require('./routes/CategoryRoute'));
app.use('/api', require('./routes/ProductRoute'));
app.use('/api', require('./routes/CartRoute'));

// Starting the server
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});