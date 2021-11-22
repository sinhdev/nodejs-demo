const http = require('http')
const port = 2021
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hello World</h1>')
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
