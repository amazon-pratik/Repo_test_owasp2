//{fact rule=improper-handling-of-case-sensitivity@v1.0 defects=1}

const app = require('express')();

app.use(/\/admin\/.*/, (req, res, next) => {
    if (!req.user.isAdmin) {
        res.status(401).send('Unauthorized');
    } else {
        next();
    }
});

app.get('/admin/users/:id', (req, res) => {
    res.send(app.database.users[req.params.id]);
});

//{/fact}
