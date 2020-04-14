const fs = require('fs');
const path = require('path');
var filteredList = [];

module.exports = function filter(pathname, ext, callback){
    console.log("module fn part 1");
   fs.readdir(pathname, function (err, list) {
    console.log("module fn part 2");
            if(err)  return callback(err)
             list.forEach(file => {
    
                    if (path.extname(file) === "." + ext) {
                        
                      filteredList.push(file)
                      
                    }
                })
                return callback(null, filteredList) 
             }
        )
      }

    
;
