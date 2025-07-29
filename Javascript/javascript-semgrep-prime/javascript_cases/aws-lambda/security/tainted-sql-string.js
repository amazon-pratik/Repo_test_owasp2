const express = require('express')
const app = express()
const port = 3000
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')
const util = require('util')

// {fact rule=sql-injection@v1.0 defects=1}
 app.get('/test', async (req, res) => {
  const query = "SELECT * FROM `users`" + " WHERE id = '" + req.query.message + "'"
// ruleid: tainted-sql-string
  const [results, metadata] = await sequelize.query(query);
  res.send(results)
})
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
 app.get('/test1', async (req, res) => {
  // ruleid: tainted-sql-string
  const [results, metadata] = await sequelize.query("SELECT * FROM `users`" + " WHERE id = '" + req.query.message + "'");
  res.send(results)
})
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
app.get('/test2', async (req, res) => {
  // ruleid: tainted-sql-string
  let query = `SELECT * FROM users WHERE id = '${req.query.message}'`
  const [results, metadata] = await sequelize.query(query);
  res.send(results)
})
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
 app.get('/test3', async (req, res) => {
  let query = "SELECT * FROM `users` WHERE id = '"
  // ruleid: tainted-sql-string
  query = query.concat(req.query.message)
  query = query.concat("'")
  const [results, metadata] = await sequelize.query(query);
  res.send(results)
})
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
 app.get('/test4', async (req, res) => {
  // ruleid: tainted-sql-string
  const query = util.format("SELECT * FROM users WHERE id = '%s'", req.query.message)
  const [results, metadata] = await sequelize.query(query);
  res.send(results)
})
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
app.get('/ok', async (req, res) => {
    // ok: tainted-sql-string
    res.send("message: " + req.query.message);
})
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
app.post('/ok2', async (req, res) => {
    // ok: tainted-sql-string
    res.send(`message: ${req.query.message}`);
})
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
app.post('/ok3', async (req, res) => {
    // ok: tainted-sql-string
    var data = "message: " + req.query.message;
    res.send(data);
})

// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
app.post('/ok4', async (req, res) => {
    var data = "message: "
    // ok: tainted-sql-string
    data = data.concat(req.query.message)
    res.send(data);
})
// {/fact}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
