const http = require('http')
const concatStream = require('concat-stream')


http.get(process.argv[2], function callback (response) { 
    var collect = "";
    var length = 0;
    response.setEncoding("utf8");
    collect = response.pipe(concatStream(function (data) {
        console.log(data.length);
        console.log(data)
    }))  
  
} )



