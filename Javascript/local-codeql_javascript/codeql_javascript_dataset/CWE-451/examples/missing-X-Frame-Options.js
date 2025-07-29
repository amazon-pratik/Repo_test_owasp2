//{fact rule=user-interface-misrepresentation-of-critical-information@v1.0 defects=1}

var express = require('express'),
    app = express();


app.get('/', function (req, res) {
    res.set('X-Frame-Options' + req.body.get('x_frame_options'))
    res.send('ok')
})

//{/fact}
