const http = require('http');

const options = {
  host: 'http://academic.vtc.ac.vn',
  port: 2010,
  path: '/api/students/'
};

// Make a request
const req = http.request(options);
req.end();

req.on('information', (res) => {
  console.log(`Got information prior to main response: ${res.statusCode}`);
});
