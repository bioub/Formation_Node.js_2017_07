const fs = require('fs');
const util = require('util');

// 1 - Enchainer sur 1 seul fichier readFile
// et writeFile sous la forme de promesse

// 2 - Encapsuler ce code dans une fonction
// qui retoune une promesse

// 3 - Réutiliser cette fonction avec Promise.all et readdir
// pour copier l'ensemble des fichiers d'un repertoire

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const copyFile = (srcPath, destPath) => {
  return new Promise((resolve, reject) => {
    readFile(srcPath)
      .then(data => writeFile(destPath, data))
      .then(resolve)
      .catch(reject);
  });
};

/*
const copyFileAsync = async function (srcPath, destPath) {
  const data = await readFile(srcPath);
  writeFile(destPath, data);
};
*/

readdir('a')
  .then(files => Promise.all(files.map(f => copyFile('a/'+f, 'b/'+f))))
  .then(() => console.log('Build done'));
