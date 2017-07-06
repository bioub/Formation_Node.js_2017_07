const fs = require('fs-extra');

fs.readdir('a')
  .then(files => Promise.all(files.map(f => fs.copy('a/'+f, 'b/'+f))))
  .then(() => console.log('Build done'));
