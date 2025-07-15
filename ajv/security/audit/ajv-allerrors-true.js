const express = require('express')
const Ajv = require ('ajv');

// {fact rule=resource-leak@v1.0 defects=1}
function test1() {
    const settings = { allErrors: true, smth: 'else' }
    // ruleid: ajv-allerrors-true
    const ajv1 = new Ajv(settings);
    return ajv1
}
// {/fact}

// {fact rule=resource-leak@v1.0 defects=1}
function test2() {
    // ruleid: ajv-allerrors-true
    var ajv = new Ajv({ allErrors: true, smth: 'else' });
    ajv.addSchema(schema, 'input');
}
// {/fact}

// {fact rule=resource-leak@v1.0 defects=1}
function test3() {
    // ruleid: ajv-allerrors-true
    var ajv = new Ajv({  smth: 'else', allErrors: true });
    ajv.addSchema(schema, 'input');
}
// {/fact}

// {fact rule=resource-leak@v1.0 defects=1}
function test4() {
    // ruleid: ajv-allerrors-true
    var ajv = new Ajv({  smth: 'else', smth: 'else', allErrors: true, smth: 'else' });
    ajv.addSchema(schema, 'input');
}
// {/fact}

// {fact rule=resource-leak@v1.0 defects=0}
function okTest1() {
    // ok: ajv-allerrors-true
    let ajv = new Ajv({ allErrors: process.env.DEBUG });
    ajv.addSchema(schema, 'input');
}
// {/fact}

// {fact rule=resource-leak@v1.0 defects=0}
function okTest2() {
    // ok: ajv-allerrors-true
    var ajv = new Ajv({  smth: 'else', allErrors: false });
    ajv.addSchema(schema, 'input');
}
// {/fact}
