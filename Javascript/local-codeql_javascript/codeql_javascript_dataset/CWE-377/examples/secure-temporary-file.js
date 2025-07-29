//{fact rule=insecure-temporary-file@v1.0 defects=0}

const fs = require('fs');
const tmp = require('tmp');

const file = tmp.fileSync().name;
fs.writeFileSync(file, "content");

//{/fact}