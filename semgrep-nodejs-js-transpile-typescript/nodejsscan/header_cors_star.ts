import express from 'express';

const app = express();

// {fact rule=origin-validation-error@v1.0 defects=1}
// ruleid:generic_cors
app.options('*', cors())
app.get('/', function (req: any, res: { set: (arg0: any) => void; }) {

    res.set(ffff)
});
// {/fact}


app.get('/', function (req: any, res: { writeHead: (arg0: number, arg1: { "Access-Control-Allow-Origin": string; }) => void; set: (arg0: string, arg1: string | null | undefined) => void; }) {
    var y = 1;
    // ruleid:express_cors
    var x = '*';

    //sgrep bug - https://github.com/returntocorp/sgrep/issues/512
// {fact rule=origin-validation-error@v1.0 defects=1}
    // ruleid:express_cors
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
// {/fact}

    // ruleid:express_cors
// {fact rule=origin-validation-error@v1.0 defects=1}
    res.set('access-control-allow-origin', '*');
// {/fact}

    //do not match - sgrep bug -rewrite-rule
// {fact rule=origin-validation-error@v1.0 defects=0}
    res.set('Access-Control-Allow-Origin', 'google.com');
// {/fact}

    // ruleid:express_cors
    res.set('Access-Control-Allow-Origin', '*');
// {/fact}

// {fact rule=origin-validation-error@v1.0 defects=1}
    // ruleid:express_cors
    res.set({
        'Content-Length': 123,
        'access-control-allow-origin': '*',
        'ETag': '12345'
    })
// {/fact}

// {fact rule=origin-validation-error@v1.0 defects=1}
    // ruleid:express_cors
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })

    res.set('access-control-allow-origin', x);

    // do not detect - sgrep bug
    res.set('access-control-allow-origin', 'xyz.com');
    //do not detect - sgrep bug
    res.set('access-control-allow-origin', null);

});
// {/fact}
