// {fact rule=hardcoded-credentials@v1.0 defects=1}
// ruleid:hardcoded_jwt_secret
import jsonwt from 'jsonwebtoken'
import jose from 'jose'
const { JWK, JWT } = jose
import config from './config'

const payload = { foo: 'bar' }
const secret = 'shhhhh'

const secret2 = config.secret
const secret3 = process.env.SECRET || 'fallback-secret'
// {/fact}


// {fact rule=hardcoded-credentials@v1.0 defects=1}
//jsonwebtoken
//true
const token1 = jsonwt.sign(payload, secret)
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}
//true
const token2 = jsonwt.sign(payload, 'some-secret')
// {fact rule=hardcoded-credentials@v1.0 defects=1}
//??
const token5 = jsonwt.sign(payload, secret3)
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}
//jose
//true
const token6 = JWT.sign(payload, JWK.asKey(secret))
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}
//true
const token7 = JWT.sign(payload, JWK.asKey('raz-dva-tri'))
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}
//true
const token8 = JWT.sign(payload, secret)
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}
//true
const token9 = JWT.sign(payload, 'secret-again')
// {/fact}



// {fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:hardcoded_jwt_secret
import $jwt from 'jsonwebtoken'

const cert = 'hardcoded-secret';

module.exports = (app: { post: (arg0: string, arg1: (req: any, res: any) => void) => void; login: (arg0: any, arg1: any) => Promise<any> }) => {
    app.post('/api/login', (req: { body: { username: any; password: any } }, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: any): void; new(): any } } }) => {
        app.login(req.body.username, req.body.password).then((out: { token: any }) => {
            out.token = $jwt.sign(out, cert, { expiresIn: '1d' });
            res.send(out);
        }, (err: any) => {
            console.error(err);
            res.status(400).send(err);
        });
    });
};
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:hardcoded_jwt_secret
import jwt from 'jsonwebtoken'

const jwtSign = (payload = { id: 1 }) =>
    jwt.sign(payload, 'hardcoded-secret')

const jwtVerify = (req: { headers: { [x: string]: any } }) => () => new Promise((resolve, reject) => {
    const token = req.headers['x-access-token']
    if (!token) {
        resolve(false)
    }
    jwt.verify(token, 'hardcoded-secret', (err: any, decoded: unknown) => {
        if (err) {
            resolve(false)
        }
        resolve(decoded)
    })
})
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}

export default { jwtSign, jwtVerify }
    (() => {

        'use strict';

        // ruleid:hardcoded_jwt_secret
        let User = require('./user'),
            jwt = require('jsonwebtoken');

        const express = require('express');
        let router = express.Router();

        router.post('/signup', (req: { body: { name: any; password: any } }, res: { send: (arg0: { success: boolean; token: any }) => void }) => {
            let user = new User({
                name: req.body.name,
                password: req.body.password
            });
            var token = jwt.sign(user, "hardcoded-secret", { expiresIn: 60 * 60 * 10 });
            res.send({ success: true, token: token });
        });

        module.exports = router;
    })();
// {/fact}

// {fact rule=hardcoded-credentials@v1.0 defects=1}

'use strict';
import config from './app.config'
const privateMethods = {
    initialize(USER: { findOne: (arg0: {}) => { (): any; new(): any; exec: { (arg0: (error: any, user: any) => any): void; new(): any } } }) {
        // ruleid:hardcoded_jwt_secret
        const router = require('express').Router(),
            jwt = require('jsonwebtoken');
        if (config) {
            router.route('/register').post((req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { error: any }): any; new(): any }; json: { (arg0: { token: any }): any; new(): any } } }) => {
                USER.findOne({}).exec((error: any, user: { save: (arg0: (error: any, user: any) => any) => void }) => {
                    if (error)
                        return res.status(400).send({ error: error });
                    user.save((error: any, user: { _id: any }) => {
                        if (error) {
                            return res.status(400).send({ error: error });
                        } else {
                            const token = jwt.sign({ id: user._id }, 'hardcoded-secret');
                            return res.status(201).json({ token: token });
                        }
                    });
                });
            });
        }
    }
};
module.exports = privateMethods;
// {/fact}
