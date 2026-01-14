// {fact rule=insecure-cryptography@v1.0 defects=1}
// ruleid: jwt-none-alg
const jose = require("jose");
const { JWK, JWT } = jose;
const token = JWT.verify('token-here', JWK.None);
// {/fact}