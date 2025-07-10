const express = require("express");
const app = express();


async function okTest() {
  const p = Deno.run({
    cmd: ["echo", "hello"],
  });

  await p.status();
}

// {fact rule=os-command-injection@v1.0 defects=1}
app.get('/user/userInput', async function (req, res) {
// ruleid: deno-dangerous-run
  const p = Deno.run({
    cmd: [req.params.userInput, "hello"],
    stdout: "piped",
    stderr: "piped",
  });

  await p.status();
});
// {/fact}

// {fact rule=os-command-injection@v1.0 defects=1}
app.get('/user/userInput', async function (req, res) {
// ruleid: deno-dangerous-run
  const p = Deno.run({
    cmd: ["bash", "-c", req.params.userInput],
    stdout: "piped",
    stderr: "piped",
  });

  await p.status();
});
// {/fact}
