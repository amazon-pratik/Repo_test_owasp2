const shell = require('shelljs');
const express = require("express");
const app = express();

// {fact rule=os-command-injection@v1.0 defects=1}
function test1(userInput) {
    // ruleid:shelljs-exec-injection
    return shell.exec(userInput, {silent: true})
}
// {/fact}

// {fact rule=os-command-injection@v1.0 defects=1}
function test2(userInput) {
    const input = `ls ${userInput}`
    // ruleid:shelljs-exec-injection
    return shell.exec(input, {silent: true})
}
// {/fact}

// {fact rule=os-command-injection@v1.0 defects=0}
function okTest3(userInput) {
    // ok:shelljs-exec-injection
    const input = 'ls ./'
    return shell.exec(input, {silent: true})
}
// {/fact}

// {fact rule=os-command-injection@v1.0 defects=0}
function okTest4(userInput) {
    // ok:shelljs-exec-injection
    return shell.exec('ls ./', {silent: true})
}
// {/fact}


function call() {
    app.get("/add/:num1/:num2", function (req, res) {
      test1(req.params.num2)
      test2(req.params.num1)
    });
  }

  call()