const express = require('express');
const morgan = require('morgan');
const routerContact = require('./routes/contact');
const logMiddleware = require('./middlewares/log');
const authenticate = require('./middlewares/authenticate');


const app = express();

app.use('/', morgan('dev'));
app.use('/api/contacts', /*authenticate,*/ routerContact);

module.exports = app;
