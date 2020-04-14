const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html, utf8')
//     const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
//     myReadStream.pipe(res)
// })


http.get(process.argv[2], function callback (response) { 
    response.setEncoding("utf8");
    response.on('data', function (data) { console.log(data) })  
} )

