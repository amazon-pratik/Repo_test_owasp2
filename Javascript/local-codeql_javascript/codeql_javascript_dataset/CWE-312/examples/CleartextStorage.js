//{fact rule=insecure-connection@v1.0 defects=1}

var express = require('express');

var app = express();
app.get('/remember-password', function (req, res) {
  let pw = req.param("current_password");
  // BAD: Setting a cookie value with cleartext sensitive data.
  res.cookie("password", pw);
});


//{/fact}
