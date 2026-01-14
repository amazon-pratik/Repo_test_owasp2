// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
function test1() {
    const { spawn } = require('child_process');
    function downloadGitCommit1(gitBranch, gitUrl, sourceCodePath) {
        // ruleid: spawn-git-clone
        const gitClone = spawn('git', [
            'clone',
            '--branch', gitBranch,
            '--depth', '1',
            gitUrl,
            sourceCodePath
        ]);
        return gitClone;
    }
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
function test2() {
    const childProcess = require('child_process');
    function downloadGitCommit2(req, res) {
        // ruleid: spawn-git-clone
        const gitClone = childProcess.spawn('git', [
            'clone',
            '--depth', '1',
            req.body.gitUrl
        ]);
        return res.send('ok');
    }
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
function test3() {
    const childProcess = require('child_process');
    function downloadGitCommit3(gitUrl) {
        // ruleid: spawn-git-clone
        const gitClone = childProcess.spawn('git', [ 'clone', gitUrl ]);
        return res.send('ok');
    }
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function testOk1() {
    const { spawn } = require('child_process');
    function downloadGitCommitOk1() {
        // ok: spawn-git-clone
        const gitClone = spawn('git', [ 'clone', 'https://hardcoded-url.com' ]);
        return res.send('ok');
    }
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function testOk2() {
    const childProcess = require('child_process');
    const gitUrl = 'https://hardcoded-url.com';
    function downloadGitCommitOk2() {
        // ok: spawn-git-clone
        const gitClone = childProcess.spawn('git', [ 'clone', gitUrl ]);
        return res.send('ok');
    }
}
// {/fact}
