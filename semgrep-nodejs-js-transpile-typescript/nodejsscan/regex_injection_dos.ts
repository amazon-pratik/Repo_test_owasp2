var express = require('express');
var app = express();
// {fact rule=resource-leak@v1.0 defects=1}
app.get('/search', function (req: { param: (arg0: string) => any; }, res: any) {
    // ruleid:regex_injection_dos
    var key = req.param("key");
    // Regex created from user input
    var re = new RegExp("\\b" + key);
});
//do not detect this
var re = new RegExp("\\b" + key + "=(.*)\n");
// {/fact}
