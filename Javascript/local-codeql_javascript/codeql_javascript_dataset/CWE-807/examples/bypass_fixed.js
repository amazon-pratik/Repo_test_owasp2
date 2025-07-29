//{fact rule=untrusted-data-in-decision@v1.0 defects=0}

var express = require('express');
var app = express();
// ...
app.get('/full-profile/:userId', function(req, res) {

    if (req.signedCookies.loggedInUserId !== req.params.userId) {
        // GOOD: login decision made based on server controlled data
        requireLogin();
    } else {
        // ... show private information
    }

});


//{/fact}