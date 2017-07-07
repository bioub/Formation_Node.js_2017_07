const express = require('express');
const morgan = require('morgan');
const routerContact = require('./routes/contact');
const logMiddleware = require('./middlewares/log');
const authenticate = require('./middlewares/authenticate');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true,
});

const app = express();

app.use('/', morgan('dev'));
app.use('/api/contacts', /*authenticate,*/ routerContact);

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not found',
  });
});

app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
});

module.exports = app;
