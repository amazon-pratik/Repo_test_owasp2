const Sandbox = require('sandbox');
let express = require('express');

let app = express();


// {fact rule=code-injection@v1.0 defects=1}
app.get('/user/:temp', function(request, response){
    const s = new Sandbox();
    s.run('input('+request.params.temp+')', cb);    //non_conformant
});
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
app.get('/user/:temp', function(request, response){
    const s = new Sandbox();
    const userInput= request.params.temp;
    const data = 'input('+userInput+')';
    s.run(data, cb);    //non_compliant
});
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
app.get('/user/:temp', function(request, response){
    const s = new Sandbox();
    const data = 'input('+request.params.temp+')';
    s.run(data, cb);    //non_compliant
});
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
function okTest1(cb) {
    const s = new Sandbox();
    // ok: sandbox-code-injection
    s.run('lol("hi")', cb);
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
function okTest2(cb) {
    const s = new Sandbox();
    var code = 'lol("hi")'
    // ok: sandbox-code-injection
    s.run(code, cb);
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
function okTest3(cb) {
    const s = new Sandbox();
    // ok: sandbox-code-injection
    s.run(`lol("hi")`, cb);
}
// {/fact}