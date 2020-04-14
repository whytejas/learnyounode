const fs = require('fs')  ;

let readMe = fs.readFileSync(process.argv[2]);

readMe = readMe.toString();

lineNumber = readMe.split('\n');

console.log(lineNumber.length - 1);

