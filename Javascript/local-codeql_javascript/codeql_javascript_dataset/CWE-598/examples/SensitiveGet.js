const express = require('express');
const app = express();
app.use(require('body-parser').urlencoded({ extended: false }))

//{fact rule=get-request-with-sensitive-query@v1.0 defects=1}

// bad: sensitive information is read from query parameters
app.get('/login1', (req, res) => {
    const user = req.query.user;
    const password = req.query.password;
    if (checkUser(user, password)) {
        res.send('Welcome');
    } else {
        res.send('Access denied');
    }
});

//{/fact}

//{fact rule=get-request-with-sensitive-query@v1.0 defects=0}

// good: sensitive information is read from post body
app.post('/login2', (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    if (checkUser(user, password)) {
        res.send('Welcome');
    } else {
        res.send('Access denied');
    }
});

//{/fact}
