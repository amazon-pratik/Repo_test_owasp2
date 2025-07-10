import express from 'express';
const router = express.Router()

// {fact rule=resource-leak@v1.0 defects=1}
router.post("/list-users", (req: { body: { users: any; }; }, res: any) => {
    var obj = req.body.users;
    var someArr = [];

    // Potential DoS if obj.length is large.
    // ruleid:layer7_object_dos
    for (var i = 0; i < obj.length; i++) {
        someArr.push(obj[i]);
    }

});
// {/fact}



module.exports = router

// {fact rule=resource-leak@v1.0 defects=1}
app.post("/foo", (req: { body: any; }, res: any) => {
    var obj = req.body;

    var ret = [];

    // Potential DoS if obj.length is large.
    // ruleid:layer7_object_dos
    for (var i = 0; i < obj.length; i++) {
        ret.push(obj[i]);
    }
});
// {/fact}
