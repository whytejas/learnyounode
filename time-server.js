const net = require('net')


const hostname = '127.0.0.1'
const port = process.argv[2];


const server = net.createServer(function (socket) {

    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
   
    let day = now.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

   
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let dateStamp = (year + "-" + month + "-" + day).toString();
    let timeStamp = (hours + ":" + minutes).toString();

    let output = dateStamp + " " +timeStamp + "\n";
    socket.end(output)
})





server.listen(port)