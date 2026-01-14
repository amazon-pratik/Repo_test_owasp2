const cp = require('child_process');

exports.handler = async (event) => {
    // {fact rule=os-command-injection@v1.0 defects=1}
    // ruleid:detect-child-process
    cp.exec(`cat *.js ${event['file']}| wc -l`, (error, stdout, stderr) => {
        console.log(stdout)
    });
    // {/fact}

    // {fact rule=os-command-injection@v1.0 defects=1}
    // ruleid:detect-child-process
    cp.spawnSync(event['cmd']);
    // {/fact}

    // {fact rule=os-command-injection@v1.0 defects=0}
    // ok:detect-child-process
    cp.exec('ls')
    // {/fact}
};