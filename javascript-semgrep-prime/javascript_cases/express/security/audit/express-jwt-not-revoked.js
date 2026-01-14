var jwt = require('express-jwt');
var blacklist = require('express-jwt-blacklist');

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
// ruleid: express-jwt-not-revoked
app.get('/ok-protected', jwt({ secret: process.env.SECRET }), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
let configSecret = config.get('secret')
const opts = Object.assign({issuer: 'http://issuer'}, {secret: configSecret})
// ruleid: express-jwt-not-revoked
app.get('/ok-protected', jwt(opts), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
// ok: express-jwt-not-revoked
app.get('/ok-protected', jwt({ secret: process.env.SECRET, isRevoked: blacklist.isRevoked }), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
// ok: express-jwt-not-revoked
let configSecret = config.get('secret')
const opts = Object.assign({issuer: 'http://issuer'}, {isRevoked: blacklist.isRevoked})

app.get('/ok-protected', jwt(opts), function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
});
// {/fact}