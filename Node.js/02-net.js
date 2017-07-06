const net = require('net');

const server = net.createServer();
const port = 1234;

server.on('connection', (socket) => {
    console.log('client connected');

    socket.on('data', (data) => {
        console.log('data received');
        console.log(data.toString());
    });

    socket.on('close', () => {
        console.log('client disconnected');
    });
});

server.on('error', (err) => {
    console.log('error');

    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} already in use`);
    }
});

server.once('listening', () => {
    console.log('server started');
});

server.listen(port);