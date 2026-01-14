const zlib = require('zlib');

const payload = Buffer.from('This is some data');
// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
for (let i = 0; i < 30000; ++i) {
    // ruleid: zlib-async-loop
    zlib.deflate(payload, (err, buffer) => {});
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
[1,2,3].forEach((el) => {
    // ruleid: zlib-async-loop
    zlib.deflate(payload, (err, buffer) => {});
})
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
for (let i = 0; i < 30000; ++i) {
    // ok: zlib-async-loop
    zlib.deflateSync(payload);
}
// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok: zlib-async-loop
zlib.deflate(payload, (err, buffer) => {});
// {/fact}
