'use strict';

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
// ruleid: hardcoded-passport-secret
const FacebookStrategy = require('passport-facebook').Strategy;

exports.init = function(passport, router, config) {

  passport.use(
    new FacebookStrategy(
      {
        clientID: config.appId,
        clientSecret: 'HARDCODED-SECRET',
        callbackURL: config.publicAddress + config.callbackURL,
        enableProof: false,
        passReqToCallback: true,
      },
      function(req, accessToken, refreshToken, profile, done) {
        // do something
      },
    ),
  );
};
// {/fact}