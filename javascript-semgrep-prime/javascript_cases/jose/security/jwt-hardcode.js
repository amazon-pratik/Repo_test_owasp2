const config = require('./config')

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example1() {
  const jose = require('jose')
  const { JWT } = jose
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  JWT.verify(payload, 'shhhhh')
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example2() {
  const jose = require('jose')
  const { JWT } = jose
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  const token2 = JWT.sign(payload, 'shhhhh')
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example3() {
  const jose = require('jose')
  const { JWT } = jose
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  const token3 = JWT.verify(payload, 'shhhhh')
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example4() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  JWT.verify(payload, JWK.asKey('raz-dva-tri'))
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example5() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  const token5 = JWT.sign(payload, JWK.asKey('raz-dva-tri'))
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example6() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  // ruleid: hardcoded-jwt-secret
  const token6 = JWT.verify(payload, JWK.asKey('raz-dva-tri'))
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example7() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const key7 = JWK.asKey('raz-dva-tri')
  // ruleid: hardcoded-jwt-secret
  JWT.verify(payload, key7)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example8() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const key8 = JWK.asKey('raz-dva-tri')
  // ruleid: hardcoded-jwt-secret
  const token8 = JWT.sign(payload, key8)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example9() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const key9 = JWK.asKey('raz-dva-tri')
  // ruleid: hardcoded-jwt-secret
  const token9 = JWT.verify(payload, key9)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example10() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret10 = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  JWT.verify(payload, secret10)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example11() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret11 = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  const token11 = JWT.sign(payload, secret11)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example12() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret12 = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  const token3 = JWT.verify(payload, secret12)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example13() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret13 = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  JWT.verify(payload, JWK.asKey(secret13))
}
// {/fact}
 
// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example14() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret14 = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  const token5 = JWT.sign(payload, JWK.asKey(secret14))
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example15() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret15 = 'shhhhh'
  // ruleid: hardcoded-jwt-secret
  const token6 = JWT.verify(payload, JWK.asKey(secret15))
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example16() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret16 = 'shhhhh'
  const key16 = JWK.asKey(secret16)
  // ruleid: hardcoded-jwt-secret
  JWT.verify(payload, key16)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example17() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret17 = 'shhhhh'
  const key17 = JWK.asKey(secret17)
  // ruleid: hardcoded-jwt-secret
  const token8 = JWT.sign(payload, key17)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example18() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret18 = 'shhhhh'
  const key18 = JWK.asKey(secret18)
  // ruleid: hardcoded-jwt-secret
  const token9 = JWT.verify(payload, key18)
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
function example10() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret2 = config.secret
  // ok: hardcoded-jwt-secret
  const token11 = JWT.sign(payload, JWK.asKey(secret2))
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
function example11() {
  const jose = require('jose')
  const { JWK, JWT } = jose
  const payload = {foo: 'bar'}
  const secret2 = config.secret
  // ok: hardcoded-jwt-secret
  const token12 = JWT.sign(payload, secret2)
}
// {/fact}
