const jwt = require('jsonwebtoken');

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
const bad = (token) => {
  // ruleid: jwt-decode-without-verify
  if (jwt.decode(token, true).param === true) {
    console.log('token is valid');
  }
};
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
const ok = (token, key) => {
  // ok: jwt-decode-without-verify
  jwt.verify(token, key);
  if (jwt.decode(token, true).param === true) {
    console.log('token is valid');
  }
};
// {/fact}
