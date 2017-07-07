const express = require('express');
const routerContact = require('./routes/contact');


const app = express();

app.use('/api/contacts', routerContact);

module.exports = app;
