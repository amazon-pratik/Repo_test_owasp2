const jwt = require('jsonwebtoken')

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
User.findOne({name: req.body.name}, function(err, user){
    // ruleid: jwt-exposed-data
    var token = jwt.sign(user, key, {expiresIn: 60*60*10});
    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
    });
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
User.findOne({name: req.body.name}, function(err, user){
    // ok: jwt-exposed-data
    const {name, email} = user
    var token = jwt.sign({name, email}, key, {expiresIn: 60*60*10});
    return token;
});
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
User.findOne({name: req.body.name}, function(err, user){
    // ok: jwt-exposed-data
    const {name, email} = user
    var token = jwt.sign({name, email}, key, {expiresIn: 60*60*10});
    return token;
});
// {/fact}
