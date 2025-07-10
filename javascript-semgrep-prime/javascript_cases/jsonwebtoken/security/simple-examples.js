const config = require('./config')

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example1() {
  const jsonwt = require('jsonwebtoken')
  const payload = {foo: 'bar'}
  const secret = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  const token1 = jsonwt.sign(payload, secret)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example2() {
  const jsonwt = require('jsonwebtoken')
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  const token2 = jsonwt.sign(payload, 'some-secret')
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
function example3() {
  // ok: hardcoded-jwt-secret
  const jsonwt = require('jsonwebtoken')
  const payload = {foo: 'bar'}
  const token3 = jsonwt.sign(payload, config.secret)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
function example4() {
  // ok: hardcoded-jwt-secret
  const jsonwt = require('jsonwebtoken')
  const payload = {foo: 'bar'}
  const secret2 = config.secret
  const token4 = jsonwt.sign(payload, secret2)
}
// {/fact}

// The hardcoded value provided to sign()
// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example5() {
  // ok: hardcoded-jwt-secret
  const jsonwt = require('jsonwebtoken')
  const payload = {foo: 'bar'}
  const secret3 = process.env.SECRET || 'fallback-secret'
  const token5 = jsonwt.sign(payload, secret3)
}
// {/fact}
