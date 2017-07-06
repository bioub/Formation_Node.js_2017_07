const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname + '/01-stream/a.txt');
const destPath = path.resolve(__dirname, '01-stream', 'b.txt');

const rs = fs.createReadStream(srcPath);
const ws = fs.createWriteStream(destPath);

rs.pipe(ws);
