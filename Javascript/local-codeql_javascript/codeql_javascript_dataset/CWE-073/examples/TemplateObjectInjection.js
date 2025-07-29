//{fact rule=cross-site-scripting@v1.0 defects=1}

var app = require('express')();
app.set('view engine', 'hbs');

app.post('/', function (req, res, next) {
    var profile = req.body.profile;
    res.render('index', profile);
});

//{/fact}
