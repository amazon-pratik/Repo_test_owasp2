var express = require('express');

var app = express();
var myObj = {}

// {fact rule=insecure-object-attribute-modification@v1.0 defects=1}
// Vulnerable to prototype pollution via user-controlled property names.
app.get('/test1', function(req, res) {
  var prop = req.query.userControlled
  // ruleid: remote-property-injection
  myObj[prop] = function() {}
  res.send('ok')
})
// {/fact}

// {fact rule=insecure-object-attribute-modification@v1.0 defects=1}
app.get('/test2', function(req, res) {
  // ruleid: remote-property-injection
  myObj[req.body] = foobar()
  res.send('ok')
})
// {/fact}

// {fact rule=insecure-object-attribute-modification@v1.0 defects=1}
// Vulnerable to prototype pollution via user-controlled property names.
app.get('/okTest', function(req, res) {
  var prop = "$" + req.query.userControlled
  // ok: remote-property-injection
  myObj[prop] = function() {}
  res.send('ok')
})
// {/fact}
