const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = process.argv[2];


const server = http.createServer((req, res) => {

// console.log(req.url)

let link = new URL(`http://${hostname}:${port}`+ req.url);
// console.log(link.pathname);

if (link.pathname == '/api/parsetime') {
let nowISO = new Date(link.searchParams.get('iso'))
let hoursISO = nowISO.getHours();
let minutesISO = nowISO.getMinutes();
let secondsISO = nowISO.getSeconds();



data =  {  
    "hour": hoursISO,  
    "minute": minutesISO,  
    "second": secondsISO  
  }
  

}


else {
    let nowUnix = new Date(link.searchParams.get('iso'))
    let unixTime = nowUnix.getTime();

    data =  {  
        "unixtime":   unixTime
    
      }
}

res.statusCode = 200
res.setHeader('Content-Type', 'application/json')
res.end(JSON.stringify(data))

})


   
 



server.listen(port, hostname)