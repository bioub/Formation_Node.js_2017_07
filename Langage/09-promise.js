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
const logFilePromise = (filePath, msg) => {
  return appendFilePromise(filePath, msg + '\n');
};

logFilePromise('logs/app.log', Math.random())
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .then(() => logFilePromise('logs/app.log', Math.random()))
  .catch((err) => {
    console.log(err.message);
  });

const logs = async function() {
  await logFilePromise('logs/app.log', Math.random());
  await logFilePromise('logs/app.log', Math.random());
  await logFilePromise('logs/app.log', Math.random());
  await logFilePromise('logs/app.log', Math.random());
  await logFilePromise('logs/app.log', Math.random());
};

logs();
