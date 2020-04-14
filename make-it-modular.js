
const filter = require('./mymodule.js');



 filter(__dirname, "txt", function callback(err, list){
     console.log("make-it-modular fn part A");
    if(err) {
        console.log(err);
    } else {
        list.forEach(file => {
            console.log("make-it-modular fn part B");
             console.log(file);
        }
        )}
})


