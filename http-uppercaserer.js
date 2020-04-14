const http = require('http')
const fs = require('fs')
const map = require('through2-map')  

const hostname = '127.0.0.1'
const port = process.argv[2];

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html, utf8')
    req.pipe(map(function (chunk) {  
        return chunk.toString().toUpperCase();  
      })).pipe(res)  
    
 
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})