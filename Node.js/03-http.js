const http = require('http');

const port = 8080;
const server = http.createServer((req, res) => {
    //console.log('request received');
    //console.log(`${req.method} ${req.url}`);

    //res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write('Hello');

    res.end();
});

server.listen(port, () => {
    console.log(`server started : http://localhost:${port}/`);
});