const http = require('http');

const port = 8080;
const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(`${req.method} ${req.url}`);

    res.statusCode = 200;
    switch (req.url) {
        case '/':
            res.setHeader('Content-type', 'text/plain');
            res.write('Hello');
            break;
        case '/presentation':
            res.setHeader('Content-type', 'text/plain');
            res.write('Présentation');
            break;
        case '/api/contacts':
            res.setHeader('Content-type', 'application/json');
            res.write(JSON.stringify([{
                prenom: 'Romain',
            }]));
            break;
        case '/redirect':
            res.statusCode = 302;
            res.setHeader('Location', 'http://www.google.fr/');
            break;
        default:
            res.statusCode = 404;
            res.write('Not found');
    }

    res.end();
});

server.listen(port, () => {
    console.log(`server started : http://localhost:${port}/`);
});