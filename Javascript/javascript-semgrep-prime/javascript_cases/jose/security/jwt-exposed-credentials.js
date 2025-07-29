//jose
// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example30 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const token1 = JWT.sign({password: 123}, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example31 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const payload = {one: 1, two: 2, password: 123}
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example32 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    let payload;
    payload = {one: 1, two: 2, password: 123}
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example33 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const payload = {}
    payload.password = 123
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example34 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const payload = Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2})
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example35 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    let payload;
    payload = Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2})
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example36 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const token1 = JWT.sign(Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example37 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const token1 = JWT.sign({user: {password: 123}}, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example38 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const payload = {one: 1, two: 2, user: {password: 123}}
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example39 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    let payload;
    payload = {one: 1, two: 2, user: {password: 123}}
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example40 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const payload = {user:{}}
    payload.user.password = 123
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example41 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const payload = Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2})
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example42 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    let payload;
    payload = Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2})
    const token1 = JWT.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example43 () {
    // ruleid: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const token1 = JWT.sign(Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'})
}
// {/fact}
// The hardcoded value provided to sign()
// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function exampleOk1() {
    // ok: jwt-exposed-credentials
    const jose = require('jose')
    const { JWK, JWT } = jose
    const token1 = JWT.sign(Object.assign({bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'})
}
// {/fact}
// The hardcoded value provided to sign()
// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function exampleOk2 () {
    // ok: jwt-exposed-credentials
    const jsonwt = require('jsonwebtoken')
    let payload;
    payload = {one: 1, two: 2, foo: 'bar'}
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}
