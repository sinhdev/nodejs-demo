var http = require('http');
var options = {
  host: 'academic.vtc.ac.vn',
  port: 2010,
  path: '/api/students/'
};

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
  })
});
req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});