// PhantomJS is depricated and hence we are not covering those cases.
// const express = require('express')
// const app = express()
// const port = 3000
// const phantom = require('phantom');

// // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
// app.get('/test', async (req, res) => {
//     const instance = await phantom.create();
//     const page = await instance.createPage();
//     await page.on('onResourceRequested', function(requestData) {
//         console.info('Requesting', requestData.url);
//     });

//     // ruleid: express-phantom-injection
//     const status = await page.property('content', req.get('name'));

//     // ruleid: express-phantom-injection
//     await page.setContent(req.query.q);

//     res.send('Hello World!')
// })
// // {/ex-fact}

// app.post('/test2', async (req, res) => {
//     const instance = await phantom.create();
//     const page = await instance.createPage();
//     await page.on('onResourceRequested', function(requestData) {
//         console.info('Requesting', requestData.url);
//     });

//     // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
//     // ruleid: express-phantom-injection
//     const status = await page.property('content', req.query.q);
//     // {/ex-fact}

//     // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
//     // ruleid: express-phantom-injection
//     await page.setContent(req.body);
//     // {/ex-fact}

//     // {ex-fact rule=server-side-request-forgery@v1.0 defects=0}
//     // ok: express-phantom-injection
//     var html = '<html>123</html>'
//     const status = await page.property('content', html);
//     // {/ex-fact}

//     const content = await page.property('content');
//     console.log(content);

//     await instance.exit();

//     res.send('Hello World!')
// })

// app.post('/test3', async (req, res) => {
//     const instance = await phantom.create();
//     const page = await instance.createPage();
//     await page.on('onResourceRequested', function(requestData) {
//         console.info('Requesting', requestData.url);
//     });

//     // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
//     // ruleid: express-phantom-injection
//     const status = await page.openUrl(req.params.url, {}, {});
//     // {/ex-fact}

//     // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
//     // ruleid: express-phantom-injection
//     await page.evaluateJavaScript(req.body.script);
//     // {/ex-fact}

//     // {ex-fact rule=server-side-request-forgery@v1.0 defects=0}
//     // ok: express-phantom-injection
//     var url = 'https://stackoverflow.com/'
//     const status = await page.openUrl(url, {}, {});
//     // {/ex-fact}

//     const content = await page.property('content');
//     console.log(content);

//     await instance.exit();

//     res.send('Hello World!')
// })


// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
