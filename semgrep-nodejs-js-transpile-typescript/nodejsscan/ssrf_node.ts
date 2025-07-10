var express = require('express');
import request from 'request';
var needle = require('needle');
var app = express();
import bent from 'bent';
const getJSON = bent('json')
const getBuffer = bent('buffer')
var urllib = require('urllib');
import http from 'http';
let axios = require('axios');
var http = require('https');

// {fact rule=server-side-request-forgery@v1.0 defects=1}
app.get('/', function (req: { query: { name: any; }; vbody: { foo: any; }; foo: any; }, res: any) {
    // ruleid:node_ssrf
    request(req.query.name, function (error: any, response: { statusCode: any; }, body: any) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
    needle('get', req.vbody.foo).then((res: { body: any; }) => {
        console.log(res.body);
    })
        .catch((err: any) => {
            console.error(err);
        });
// {/fact}


// {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
    // urllib.request(req.foo, function (err: any, data: { toString: () => any; }, res: { statusCode: any; headers: any; }) {
    //     if (err) {
    //         throw err; // you need to handle error
    //     }
    //     console.log(res.statusCode);
    //     console.log(res.headers);
    //     // data is Buffer instance
    //     console.log(data.toString());
    // });

});
// {/ex-fact}

// {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
// app.get('/', function (req: { foo: { bar: any; }; post: { doo: RequestInfo | URL; }; }, res: any) {
//
//     // ruleid:node_ssrf
//     needle.get(req.foo, function (error: any, response: { statusCode: number; body: any; }) {
//         if (!error && response.statusCode == 200)
//             console.log(response.body);
//     });

// {/ex-fact}

// // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
//     // ruleid:node_ssrf
//     needle.post(req.foo)
//         .pipe(out)
//         .on('finish', () => {
//             console.log('pipe done');
//         });
//
//     //Do not match this
//     needle.get('http://google.com')
//         .pipe(out)
//         .on('finish', () => {
//             console.log('pipe done');
//         });
//
//     //Do not match this to reduce false positives
//     needle.get(somvar)
//         .pipe(out)
//         .on('finish', () => {
//             console.log('pipe done');
//         });
//
// // {/ex-fact}

// {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
    // axios.get(req.foo.bar)
    //     .then(function (response: any) {
    //         // handle success
    //         console.log(response);
    //     })
    //     .catch(function (error: any) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });
// {/ex-fact}


// {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
//     let obj = await getJSON(req.foo);
// // {/ex-fact}

    // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
    // let buffer = await getBuffer(req.foo);
// {/ex-fact}

    // {fact rule=server-side-request-forgery@v1.0 defects=1}

    // ruleid:node_ssrf
    fetch(req.post.doo, { method: 'POST', body: 'a=1' })
        .then(res => res.json()) // expecting a json response
        .then(json => console.log(json));

});
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}

app.listen(8000);

// do not match
needle.get(foo, function (error: any, response: { statusCode: number; body: any; }) {
    if (!error && response.statusCode == 200)
        console.log(response.body);
});


var net = require('net');


app.get('/', function (req: { body: { host: any; }; foo: any; end: () => void; once: (arg0: string, arg1: (res: any) => void) => void; socket: { localAddress: any; localPort: any; }; }, res: any) {
    var client = new net.Socket();
    // ruleid:node_ssrf
    client.connect(1337, req.body.host, function () {
        console.log('Connected');
        client.write('Hello, server! Love, Client.');
    });

    client.on('data', function (data: string) {
        console.log('Received: ' + data);
        client.destroy(); // kill client after server's response
    });

    client.on('close', function () {
        console.log('Connection closed');
    });

// {/fact}




    // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
    // const fk = http.get({ host: req.foo });
    // req.end();
    // req.once('response', (res: any) => {
    //     const ip = req.socket.localAddress;
    //     const port = req.socket.localPort;
    //     console.log(`Your IP address is ${ip} and your source port is ${port}.`);
    //     // Consume response object
    // });

});
// {/ex-fact}
