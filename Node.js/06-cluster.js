const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs - 1; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    const port = 9090;
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
}