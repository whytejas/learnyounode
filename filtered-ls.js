const fs = require('fs');
const path = require('path');
// const filteredList = [];


function filter(arg1, arg2, pathname, ext) {

    fs.readdir(pathname, function callback(err, list) {

        if (!err) {

            list.forEach(file => {

                if (path.extname(file) === "." + ext) {
                    console.log(file)
                    // filteredList.push(file)
                }
            })
            // console.log(filteredList);
        }
    })
};

        
// filter(process.argv[0], process.argv[1], __dirname, "txt");

filter(process.argv[0], process.argv[1], process.argv[2], process.argv[3])