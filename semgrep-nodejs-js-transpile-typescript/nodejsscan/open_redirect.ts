import express from 'express';
const router = express.Router()

router.use((req: { method: string; session: { data: any; }; }, res: any, next: () => void) => {
    if (req.method === 'POST') {
        console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
})

router.post('/sprint18b/frequency', (req: any, res: { redirect: (arg0: string) => void; }) => {
    res.redirect('/sprint18b/payment') //GOOD
});

var express = require('express');

var app = express();
// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path', function (req: { param: (arg0: string) => any; }, res: { redirect: (arg0: number, arg1: any) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(302, req.param("target"));
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path1', function (req: { param: any; }, res: { redirect: (arg0: number, arg1: any) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(300, req.param);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path2', function (req: { param: { [x: string]: any; }; }, res: { redirect: (arg0: any) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(req.param["target"]);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path3', function (req: { body: { url: any; }; }, res: { redirect: (arg0: any) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(req.body.url);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path4', function (req: { param: (arg0: string) => string; }, res: { redirect: (arg0: string) => void; }) {
    // BAD subdomain control
    // ruleid:express_open_redirect
    res.redirect("sdcssf" + req.param("target"));
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path5', function (req: { param: (arg0: string) => string; }, res: { redirect: (arg0: string) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(req.param("target") + "/asdad");
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.all(function (req: { param: { [x: string]: any; }; }, res: { header: (arg0: string, arg1: any) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect2
    res.header("Location", req.param["target"]);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}

app.all(function (req: { param: (arg0: string) => any; }, res: { header: (arg0: string, arg1: any) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect2
    res.header('Location', req.param("foo"));
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}

app.all(function (req: { foo: string; }, res: { writeHead: (arg0: number, arg1: { location: string; foo: any; }) => void; }) {
    // ruleid:express_open_redirect2
    res.writeHead(200, { location: 'foo \rinvalid: bar' + req.params.foo + 'asdadasd', foo: bar });
});

// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.all(function (req: { foo: any; }, res: { writeHead: (arg0: number, arg1: { location: any; }) => void; }) {
    // ruleid:express_open_redirect2
    res.writeHead(200, { 'location': req.params.foo });
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.all(function (req: { param: (arg0: string) => any; }, res: { header: (arg0: string, arg1: any) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect2
    res.header('location', req.param("bar"));
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path', function (req: { param: (arg0: string) => any; }, res: { redirect: (arg0: any) => void; }) {
    // ruleid:express_open_redirect
    var target = req.param("target");
    // BAD: sanitization doesn't apply here
    res.redirect(target);
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/foo', function (req: { param: (arg0: string) => string; }, res: { redirect: (arg0: any) => void; }) {
    // BAD: may be a global redirection
    // ruleid:express_open_redirect
    res.redirect((req.param('action') && req.param('action') != "") ? req.param('action') : "/google_contacts")
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/yet/another/path', function (req: { param: (arg0: string) => any; }, res: { redirect: (arg0: string) => void; }) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(`${req.param("target")}/foo`);
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/array/join', function (req: { query: { page: any; section: any; }; }, res: { redirect: (arg0: string) => void; }) {
    // BAD: request input becomes before query string
    // ruleid:express_open_redirect
    res.redirect([req.query.page, '?section=', req.query.section].join(''));
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/call', function (req: { query: { nextUrl: any; }; }, res: any) {
    sendUserToUrl(res, req.query.nextUrl);
});

function sendUserToUrl(res: { redrect: (arg0: any) => void; }, nextUrl: any) {
    // BAD: value comes from query parameter
    res.redirect(nextUrl);
}
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/redirect/:user', function (req: { params: { user: string; }; }, res: { redirect: (arg0: string) => void; }) {

    // ruleid:express_open_redirect
    res.redirect('/' + req.params.user); // BAD - could go to //evil.com
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('//' + req.params.user); // BAD - could go to //evil.com
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('u' + req.params.user); // BAD - could go to u.evil.com
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('Fan999' + req.params.user); // BAD - could go to Fan999.evil.com
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('/' + ('/u' + req.params.user)); // BAD - could go to //u.evil.com,
// {/fact}

// {fact rule=open-redirect@v1.0 defects=0}
    //do not trigger
    res.redirect('/' + foo)
});
// {/fact}
