const fs = require('fs')  ;

fs.readFile('readMe.txt', 'utf8', function callback (err, data) { 
    if(!err) {
    const readMe = data;
    const lineNumber = readMe.split('\n');
    console.log(lineNumber.length - 1);
}} );




