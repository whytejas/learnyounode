var express = require('express');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
res.render('index');
})


app.get('/profile/:name', function(req, res){
    res.render('profile', {person: req.params.name, qs: req.query});
    })

app.listen(3000, () => {
    console.log('Server running');
});