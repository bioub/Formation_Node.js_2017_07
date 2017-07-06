const express = require('express');

const port = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/presentation', (req, res) => {
    res.send('Présentation');
});

app.get('/api/contacts', (req, res) => {
    res.json([{
        prenom: 'Romain',
    }]);
});

app.get('/redirect', (req, res) => {
    res.redirect('http://www.google.fr/');
});

/*
app.all('/*', (req, res) => {
    console.log('request received');
    console.log(`${req.method} ${req.url}`);
});
*/

app.listen(port, () => {
    console.log(`server started : http://localhost:${port}/`);
});