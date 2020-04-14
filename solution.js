var fs = require('fs'),
    path = require('path');
module.exports = function(dir, filter, callback) {
  var matches = [];
  fs.readdir(dir, function (err, data) {
    if (err) {
      callback(err);
    }
    data.forEach(function (element, index, list) {
      if(path.extname(element) == '.' + filter) {
        matches.push(element);
      }
    });
    callback(null, matches);
  });
};