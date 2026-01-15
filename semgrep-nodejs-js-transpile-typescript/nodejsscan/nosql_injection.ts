var MongoClient = require('mongodb').MongoClient;
// mongo js injection https://lockmedown.com/securing-node-js-mongodb-security-injection-attacks/
// {fact rule=nosql-injection@v1.0 defects=1}
timelineRouter.route("/api/timeline")
    .get(async function (req: { foo: { bar: any; }; query: { end: any; }; }, res: { json: (arg0: { timelineItems: any; }) => any; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) {
        try {
            var foo = req.foo.bar;
            const startDate = "01/01/2000";
            // ruleid:node_nosqli_js_injection
            const endDate = req.query.end;
            const query = { $where: "this.hidden == false" };

            if (startDate && endDate) {
                query["$where"] = "this.start >= new Date('" + startDate + "') && " +
                    "this.end <= new Date('" + endDate + "') &&" +
                    "this.hidden == false;";
            }

            const TimelineItem = await getTimelineItemModel();
            const timelineItems = await TimelineItem.find(query);
            console.log(colors.yellow(`# of Timeline Items retrieved: ${timelineItems.length}`));
            return res.json({ timelineItems: timelineItems });

        } catch (error) {
            res.status(500).send("There was an error retrieving timeline items.  Please try again later");
        }
    });
// {/fact}

// {fact rule=nosql-injection@v1.0 defects=1}
// https://nullsweep.com/a-nosql-injection-primer-with-mongo/
// ruleid:node_nosqli_js_injection
let username = req.query.username;
var query = { $where: `this.username == '${username}'` }
User.find(query, function (err: any, users: any) {
    if (err) {
        // Handle errors
    } else {
        res.render('userlookup', { title: 'User Lookup', users: users });
    }
});
// {/fact}

// {fact rule=nosql-injection@v1.0 defects=1}
app.post('/foo', function (req: { body: { email: any; }; }, res: { send: (arg0: string) => void; }) {
// ruleid:node_nosqli_js_injection
    var query = {};
    query['$where'] = `this.email == '${req.body.email}'`;
    User.find(query, function (err: any, data: any) {
        if (err) {
            res.send(err);
        } else if (data) {
            res.send('User Login Successful');
        } else {
            res.send('Wrong Username Password Combination');
        }
    })
});
// {/fact}

// {fact rule=nosql-injection@v1.0 defects=1}
app.post('/smth', function (req: { body: { email: any; }; }, res: { send: (arg0: string) => void; }) {
// ruleid:node_nosqli_injection
    var query = {};
    query['email'] = req.body.email;
    User.findOne(query, function (err: any, data: any) {
        if (err) {
            res.send(err);
        } else if (data) {
            res.send('User Login Successful');
        } else {
            res.send('Wrong Username Password Combination');
        }
    })
});
// {/fact}

// {fact rule=nosql-injection@v1.0 defects=1}
app.post('/login', function (req: { body: { email: any; password: any; }; }, res: { send: (arg0: string) => void; }) {
// ruleid:node_nosqli_injection
    User.findOne({ 'email': req.body.email, 'password': req.body.password }, function (err: any, data: any) {
        if (err) {
            res.send(err);
        } else if (data) {
            res.send('User Login Successful');
        } else {
            res.send('Wrong Username Password Combination');
        }
    })
});
// {/fact}
