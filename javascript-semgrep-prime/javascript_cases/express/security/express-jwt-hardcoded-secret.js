var jwt = require('express-jwt');

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
// ruleid: express-jwt-hardcoded-secret
app.get('/protected', jwt({ secret: 'shhhhhhared-secret', isRevoked: isRevokedCallback }), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
let hardcodedSecret = 'shhhhhhared-secret'
// ruleid: express-jwt-hardcoded-secret
app.get('/protected2', jwt({ secret: hardcodedSecret, isRevoked: isRevokedCallback }), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
let secret = "hardcode"
// ruleid: express-jwt-hardcoded-secret
const opts = Object.assign({issuer: 'http://issuer'}, {secret}, {isRevoked: isRevokedCallback})

app.get('/protected3', jwt(opts), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
// ok: express-jwt-hardcoded-secret
app.get('/ok-protected', jwt({ secret: process.env.SECRET, isRevoked: isRevokedCallback }), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
let configSecret = config.get('secret')
const opts = Object.assign({issuer: 'http://issuer'}, {secret: configSecret}, {isRevoked: isRevokedCallback})

// ok: express-jwt-hardcoded-secret
app.get('/ok-protected', jwt(opts), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}
