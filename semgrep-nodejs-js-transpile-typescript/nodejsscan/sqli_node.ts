var mysql = require('mysql');

// {fact rule=sql-injection@v1.0 defects=1}
const pg = require('pg');
// ruleid:node_sqli_injection
connection.query("SELECT * FROM bank_accounts WHERE dob = '" + req.body.dob + "' AND bank_account = '" + req.body.account_number + "'", function (error: any, results: any) { });

// {/fact}

const sequelize = require('../conn');
router.post('/', function (req: { body: { input: string; }; }, res: { json: (arg0: { message: any; }) => void; }) {
// {fact rule=sql-injection@v1.0 defects=1}
    // ruleid:node_sqli_injection
    var query = 'SELECT * FROM person WHERE id = \'' +
        req.body.input + '\'';
    sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
        model: Foo
    })
        .then(function (foo: any) {
            res.json({ message: person });
        })
        .catch(function (err: { toString: () => any; }) {
            res.json({ message: err.toString() });
        });
});
// {/fact}


// {fact rule=sql-injection@v1.0 defects=1}
var connection = mysql.createConnection({
    host: 'localhost',
    user: user,
    password: pass,
    database: 'technicalkeeda',
    debug: false,
});
connection.connect();

// ruleid:node_sqli_injection
var employeeId = req.foo;
var sql = "SELECT * FROM trn_employee WHERE employee_id = " + employeeId;

connection.query(sql, function (error: any, results: any, fields: any) {
    if (error) {
        throw error;
    }
    console.log(results);
});
// {/fact}


// {fact rule=sql-injection@v1.0 defects=1}
connection.connect(function (err: any) {
    // ruleid:node_sqli_injection
    connection.query('SELECT * FROM users WHERE id = ' + req.foo('bar'), (err: any, res: any) => { });
});

connection.end();
// {/fact}


// {fact rule=sql-injection@v1.0 defects=1}
const pgcon = new pg.Client({ host: host, user: user, password: pass, database: db });
pgcon.connect();
// ruleid:node_sqli_injection
var inp = req.foo["id"];
pgcon.query('SELECT * FROM users WHERE id = ' + inp, (err: any, res: any) => { });

// {/fact}


// {fact rule=sql-injection@v1.0 defects=1}
const pg = require('pg');
const pool = new pg.Pool(config);
function handler(req: { foo: { bar: string; }; }, res: any) {
    // ruleid:node_sqli_injection
    var query1 = "SELECT FOO,BAR FROM TABLE WHERE CAT='"
        + req.foo.bar + "' ORDER BY FOO";
    pool.query(query1, [], function (err: any, results: any) {
    });
}
// {/fact}
