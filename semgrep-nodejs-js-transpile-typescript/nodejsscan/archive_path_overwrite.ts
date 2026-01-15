//Ref: https://snyk.io/research/zip-slip-vulnerability
import fs from 'fs';
import unzip from 'unzip';

// {fact rule=path-traversal@v1.0 defects=1}
fs.createReadStream('archive.zip')
    .pipe(unzip.Parse())
    .on('entry', (entry: { path: any; pipe: (arg0: any) => void; }) => {
        const fileName = entry.path;
        // Arbitrary file overwrite
        // ruleid:zip_path_overwrite
        entry.pipe(fs.createWriteStream(fileName));
    });
// {/fact}

// {fact rule=path-traversal@v1.0 defects=1}
fs.createReadStream('archive.zip')
    .pipe(unzip.Parse())
    .on('entry', (entry: { path: any; pipe: (arg0: any) => void; }) => {
        const fileName = entry.path;
        // Arbitrary file overwrite
        // ruleid:zip_path_overwrite
        entry.pipe(fs.writeFileSync(fileName));
    });
// {/fact}

// {fact rule=path-traversal@v1.0 defects=1}
fs.readFile('path/to/archive.zip', function (err: any, zipContents: any) {
    unzip.Parse(zipContents).on('entry', function (entry: { path: string; contents: any; }) {
        var fileName = 'output/path/' + entry.path;
        // Arbitrary file overwrite
        // ruleid:zip_path_overwrite2
        fs.writeFileSync(fileName, entry.contents);
    });
});
// {/fact}

// {fact rule=path-traversal@v1.0 defects=1}
//admzip
import fs from 'fs';
var AdmZip = require('adm-zip');
var zip = new AdmZip("archive.zip");
var zipEntries = zip.getEntries();
// ruleid:admzip_path_overwrite
zipEntries.forEach(function (zipEntry: { entryName: any; }) {
    fs.createWriteStream(zipEntry.entryName);
});
// {/fact}

// {fact rule=path-traversal@v1.0 defects=1}
// ruleid:admzip_path_overwrite
zip.getEntries().forEach(function (zipEntry: { entryName: any; }) {
    fs.writeFileSync(zipEntry.entryName);
});
// {/fact}

// {fact rule=path-traversal@v1.0 defects=1}
// tar-stream overwrite
import tar from 'tar-stream';
const extract = tar.extract();
// {fact rule=path-traversal@v1.0 defects=1}
extract.on('entry', (header: { name: any; }, stream: { pipe: (arg0: any) => void; on: (arg0: string, arg1: () => void) => void; resume: () => void; }, next: () => void) => {
    // ruleid:tar_path_overwrite
    const out = fs.createWriteStream(header.name);
    stream.pipe(out);
    stream.on('end', () => {
        next();
    })
    stream.resume();
})
// {/fact}

// {fact rule=path-traversal@v1.0 defects=1}
tar.extract().on('entry', (header: { name: any; }, stream: { pipe: (arg0: any) => void; on: (arg0: string, arg1: () => void) => void; resume: () => void; }, next: () => void) => {
    // ruleid:tar_path_overwrite
    const out = fs.writeFileSync(header.name);
    stream.pipe(out);
    stream.on('end', () => {
        next();
    })
    stream.resume();
})
// {/fact}

// {fact rule=path-traversal@v1.0 defects=1}
///unzipper lib
fs.createReadStream('./bad.tar').pipe(extract);
import fs from 'fs';
import unzipper from 'unzipper';

fs.createReadStream('path/to/archive.zip')
    .pipe(unzipper.Parse())
    .on('entry', function (entry: { path: any; pipe: (arg0: any) => void; }) {
        var fileName = entry.path;
        // ruleid:zip_path_overwrite
        entry.pipe(fs.createWriteStream(fileName));
    });
// {/fact}

