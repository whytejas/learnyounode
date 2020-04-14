const http = require('http')
const concatStream = require('concat-stream')

const urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4],
]

var count = 0;
var pooled = [];
var collect = "";

urls.forEach((url, index) =>
http.get(url, function callback (response) { 
    
  response.setEncoding("utf8");
    collect = response.pipe(concatStream(function (data) {
    console.log(data);
      pooled[index] = data.toString();

      count++;
      response.on('end', () => {if (count == urls.length){
          pooled.forEach((pool) => {
              console.log(pool)
          })
          
      }
    })
  

} ))}))





