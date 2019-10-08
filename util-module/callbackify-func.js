const util = require('util');

async function fn() {
  return 'hello world!';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

/*
function fn2() {
    return Promise.reject(null);
  }
  const callbackFunction2 = util.callbackify(fn2);
  
  callbackFunction2((err, ret) => {
    // When the Promise was rejected with `null` it is wrapped with an Error and
    // the original value is stored in `reason`.
    err && err.hasOwnProperty('reason') && err.reason === null;  // true
  });*/