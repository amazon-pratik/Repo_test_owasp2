const jwt = require('jsonwebtoken')

// ruleid: hardcoded-jwt-secret
const jwtSign = (payload = { id: 1 }) =>
  jwt.sign(payload, 'hardcoded-secret')

  // {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
const jwtVerify = req => () => new Promise((resolve, reject) => {
  const token = req.headers['x-access-token']
  if (!token) {
    resolve(false)
  }
  // ruleid: hardcoded-jwt-secret
  jwt.verify(token, 'hardcoded-secret', (err, decoded) => {
    if (err) {
      resolve(false)
    }
    resolve(decoded)
  })
})
// {/fact}

export default {jwtSign, jwtVerify}
