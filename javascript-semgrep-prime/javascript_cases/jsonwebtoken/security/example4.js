const $jwt = require('jsonwebtoken');

const cert = 'hardcoded-secret';

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
module.exports = (app) => {
  app.post('/api/login', (req, res) => {
    app.login(req.body.username, req.body.password).then((out) => {
      // ruleid: hardcoded-jwt-secret
      out.token = $jwt.sign(out, cert, {expiresIn: '1d'});
      res.send(out);
    }, (err) => {
      console.error(err);
      res.status(400).send(err);
    });
  });
};
// {/fact}
