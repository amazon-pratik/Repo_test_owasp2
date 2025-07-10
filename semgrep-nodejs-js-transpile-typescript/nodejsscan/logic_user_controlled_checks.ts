var express = require('express');
var app = express();
app.get('/view/:id', function (req: { cookies: { [x: string]: any; }; params: { [x: string]: any; }; }, res: any) {

// {fact rule=untrusted-data-in-decision@v1.0 defects=1}
    // ruleid:node_logic_bypass
    if (req.cookies["user"] === req.params["id"]) {
        showProfile();
    }

});
// {/fact}

