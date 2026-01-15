var http = require('http');

var server = http.createServer(function (req: { foo: string; }, res: { writeHead: (arg0: number, arg1: { test: any; foo?: any; }) => void; end: (arg0: string) => void; }) {
    var bla = 'dsdsd';
    switch (testIndex++) {
        // {fact rule=neutralization-of-http@v1.0 defects=1}
        case 0:
            // ruleid:generic_header_injection
            res.writeHead(200, { test: 'foo \r\ninvalid: bar' + req.params.foo });
            break;
// {/fact}

        case 1:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: req.params.foo + 'foo \ninvalid: bar' });
            break;
        case 2:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: 'foo \rinvalid: bar' + req.params.foo + 'asdadasd', foo: bar });
            break;
// {/fact}

        case 3:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: bla + 'foo \n\n\ninvalid: bar' + req.params.foo });
            break;
// {/fact}

        case 5:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: bla + 'foo \n\n\ninvalid: bar' + req.body.foo('asd') });
            break;
// {/fact}

        case 4:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: req.params.foo });
            server.close();
            break;
// {/fact}

        default:
            assert(false);
    }
    res.end('Hi mars!');
});
server.listen(common.PORT);

var express = require('express');
var app = express();
app.get('/', function (req: { foo: string; query: { (arg0: string): string; (arg0: string): string;[x: string]: string; foo: any; }; }, res: { writeHead: (arg0: number, arg1: { test?: string; tast?: any; }) => void; set: (arg0: string, arg1: string | undefined) => void; }) {
    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.writeHead(200, { test: 'foo \r\ninvalid: bar' + req.body.foo });
// {/fact}


    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('Content-Type', req.query.foo);
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('foo', 'asdad' + req.query.foo);
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set(req.query.foo, 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('asda' + req.query.foo, 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('asda' + req.query["foo"], 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('asda' + req.query("foo"), 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': req.query.foo,
        'ETag': '12345'
    })
    //do not detect
    res.writeHead(200, { tast: ddd })
    res.set(ffff)
});
// {/fact}

