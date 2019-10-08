const http = require('http')
const port = 3000
http.createServer((req, res) => {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
    });
    console.log(body)

    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write(req.headers['user-agent'] + '\r\n')
    res.write(req.method + '\r\n')
    res.end(req.url)
  }).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })