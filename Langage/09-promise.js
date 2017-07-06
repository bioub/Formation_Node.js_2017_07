const fs = require('fs');
const util = require('util');

/*
const logFileSync = (filePath, msg) => {
  fs.appendFileSync(filePath, msg + '\n');
};

try {
  logFileSync('logs/app.log', Math.random());
  logFileSync('logs/app.log', Math.random());
  logFileSync('logs/app.log', Math.random());
  logFileSync('logs/app.log', Math.random());
  logFileSync('logs/app.log', Math.random());
}
catch (err) {
  console.log(err.message);
}
*/

/*
const logFile = (filePath, msg, cb) => {
  fs.appendFile(filePath, msg + '\n', cb);
};

logFile('logs/app.log', Math.random(), (err) => {
  if (err) {
    console.log(err.message);
  }
  logFile('logs/app.log', Math.random(), (err) => {
    if (err) {
      console.log(err.message);
    }
    logFile('logs/app.log', Math.random(), (err) => {
      if (err) {
        console.log(err.message);
      }
      logFile('logs/app.log', Math.random(), (err) => {
        if (err) {
          console.log(err.message);
        }
        logFile('logs/app.log', Math.random(), (err) => {
          if (err) {
            console.log(err.message);
          }

        });
      });
    });
  });
});
*/


const appendFilePromise = util.promisify(fs.appendFile);
/*
const appendFilePromise = (filePath, msg) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, msg, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
*/
const statPromise = util.promisify(fs.stat);
const mkdirPromise = util.promisify(fs.mkdir);

const logFilePromise = (filePath, msg) => {
  return appendFilePromise(filePath, msg + '\n');
};

/*
statPromise('logs')
  .catch(() => mkdirPromise('logs'))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .catch((err) => {
    console.log(err.message);
  });
*/

const logs = async function() {
  try {
    await statPromise('logs');
  }
  catch (err) {
    await mkdirPromise('logs');
  }
  try {
    await logFilePromise('logs/app.log', Math.random());
    await logFilePromise('logs/app.log', Math.random());
    await logFilePromise('logs/app.log', Math.random());
    await logFilePromise('logs/app.log', Math.random());
    await logFilePromise('logs/app.log', Math.random());
  }
  catch (err) {
    console.log(err.message);
  }
};

logs();

