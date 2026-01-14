const jsonwt = require('jsonwebtoken')

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example1 () {
    // ruleid: jwt-exposed-credentials
    const token1 = jsonwt.sign({password: 123}, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example2 () {
    // ruleid: jwt-exposed-credentials
    const payload = {one: 1, two: 2, password: 123}
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example3 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = {one: 1, two: 2, password: 123}
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example4 () {
    const payload = {}
    // ruleid: jwt-exposed-credentials
    payload.password = 123
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example5 () {
    // ruleid: jwt-exposed-credentials
    const payload = Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2})
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example6 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2})
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example7 () {
    // ruleid: jwt-exposed-credentials
    const token1 = jsonwt.sign(Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example8 () {
    // ruleid: jwt-exposed-credentials
    const token1 = jsonwt.sign({user: {password: 123}}, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example9 () {
    // ruleid: jwt-exposed-credentials
    const payload = {one: 1, two: 2, user: {password: 123}}
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example10 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = {one: 1, two: 2, user: {password: 123}}
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example11 () {
    const payload = {user:{}}
    // ruleid: jwt-exposed-credentials
    payload.user.password = 123
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example12 () {
    // ruleid: jwt-exposed-credentials
    const payload = Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2})
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example13 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2})
    const token1 = jsonwt.sign(payload, 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example14 () {
    // ruleid: jwt-exposed-credentials
    const token1 = jsonwt.sign(Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example15 () {
    // ruleid: jwt-exposed-credentials
    jsonwt.sign({password: 123}, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example16 () {
    // ruleid: jwt-exposed-credentials
    const payload = {one: 1, two: 2, password: 123}
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example17 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = {one: 1, two: 2, password: 123}
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example18 () {
    const payload = {}
    // ruleid: jwt-exposed-credentials
    payload.password = 123
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example19 () {
    // ruleid: jwt-exposed-credentials
    const payload = Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2})
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example20 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2})
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example21 () {
    // ruleid: jwt-exposed-credentials
    jsonwt.sign(Object.assign({password: 'bar'}, {bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example22 () {
    // ruleid: jwt-exposed-credentials
    jsonwt.sign({user: {password: 123}}, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example23 () {
    // ruleid: jwt-exposed-credentials
    const payload = {one: 1, two: 2, user: {password: 123}}
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example24 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = {one: 1, two: 2, user: {password: 123}}
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example25 () {
    const payload = {user:{}}
    // ruleid: jwt-exposed-credentials
    payload.user.password = 123
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example26 () {
    // ruleid: jwt-exposed-credentials
    const payload = Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2})
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example27 () {
    let payload;
    // ruleid: jwt-exposed-credentials
    payload = Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2})
    jsonwt.sign(payload, 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example28 () {
    // ruleid: jwt-exposed-credentials
    jsonwt.sign(Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'}, () => {})
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
function example29 () {
    // ruleid: jwt-exposed-credentials
    some.token = jsonwt.sign(Object.assign({user: {password: 123}}, {bar: 123}, {one: 1, two: 2}), 'secret', {some: 'params'}, () => {})
}
// {/fact}