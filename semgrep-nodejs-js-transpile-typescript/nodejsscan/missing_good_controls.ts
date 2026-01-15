app.post('/entry', (req: { body: { message: any; }; }, res: { send: (arg0: string) => void; }) => {
    console.log(`Message received: ${req.body.message}`);
    res.send(`CSRF token not used`);
});

app.post('/auth', function (request: { body: { username: any; password: any; }; session: { loggedin: boolean; username: any; }; }, response: { redirect: (arg0: string) => void; send: (arg0: string) => void; end: () => void; }) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error: any, results: string | any[], fields: any) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

// missing helmet
const helmet = require('helmet')
const xssFilter = require('x-xss-protection')
const noSniff = require('dont-sniff-mimetype')
const hsts = require('hsts')
const frameguard = require('frameguard')
const permittedCrossDomainPolicies = require('helmet-crossdomain')

app.use(helmet.dnsPrefetchControl({ allow: true }))
app.use(dnsPrefetchControl({ allow: true }))