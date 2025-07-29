"use strict";

const config = require('./config')
const jsonwt = require('jsonwebtoken')

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example1() {
  const payload = {foo: 'bar'}
  const secret = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  const token1 = jsonwt.sign(payload, secret)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example2() {
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  const token2 = jsonwt.sign(payload, 'some-secret')
}
// {/fact}
// The hardcoded value provided to sign()
// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example3() {
  // ok: hardcoded-jwt-secret
  const payload = {foo: 'bar'}
  const token3 = jsonwt.sign(payload, config.secret)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
function example4() {
  // ok: hardcoded-jwt-secret
  const payload = {foo: 'bar'}
  const secret2 = config.secret
  const token4 = jsonwt.sign(payload, secret2)
}
// {/fact}
// The hardcoded value provided to sign()
// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example5() {
  // ok: hardcoded-jwt-secret
  const payload = {foo: 'bar'}
  const secret3 = process.env.SECRET || 'fallback-secret'
  const token5 = jsonwt.sign(payload, secret3)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
const Promise = require("bluebird");
const secret = "hardcoded-secret"
class Authentication {
    static sign(obj){
        // ruleid: hardcoded-jwt-secret
        return jsonwt.sign(obj, secret, {});
    }

    static authenticate(payload) {
        var token = payload.token;
        let promise = new Promise((resolve, reject) => {
            if (token) {
                jwt.verify(token, secret, function (err, decoded) {
                    if (err) {
                        reject(err);
                    } else {
                         resolve(decoded);
                    }
                });
            } else {
                reject(new Error("No token provided"));
            }
        });

        return promise;

    }
}
// {/fact}

module.exports = Authentication;
