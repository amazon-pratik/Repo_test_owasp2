'use strict';

const fs = require('fs');
const {VM, NodeVM} = require('vm2');
const express = require("express");
const app = express();

// {fact rule=code-injection@v1.0 defects=1}
// ruleid:vm2-context-injection
async function test1(input) {
  code = `
    console.log("Hello world")
  `;

  const sandbox = {
    setTimeout,
    watch: input
  };
// {/fact}
  return new VM({timeout: 40 * 1000, sandbox}).run(code);
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
// ruleid:vm2-context-injection
function test2(input) {
  const sandbox = {
    setTimeout,
    input
  };

  const nodeVM = new NodeVM({timeout: 40 * 1000, sandbox});
  return nodeVM.run('console.log("Hello world")')
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok:vm2-context-injection
async function okTest1() {
  code = `
    console.log("Hello world")
  `;

  const sandbox = {
    setTimeout,
    fs
  };

  return new VM({timeout: 40 * 1000, sandbox}).run(code);
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok:vm2-context-injection
function okTest2() {
  const sandbox = {
    setTimeout,
    fs
  };

  const nodeVM = new NodeVM({timeout: 40 * 1000, sandbox});
  return nodeVM.run('console.log("Hello world")')
}
// {/fact}

function call() {
  app.get("/add/:num1/:num2", function (req, res) {
    test1(req.params.num2)
    test2(req.params.num1)
  });
}