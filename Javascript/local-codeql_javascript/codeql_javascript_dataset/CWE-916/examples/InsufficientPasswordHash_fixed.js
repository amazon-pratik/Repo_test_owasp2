//{fact rule=clear-text-credentials@v1.0 defects=0}

const bcrypt = require("bcrypt");
function hashPassword(password, salt) {
  var hashed = bcrypt.hashSync(password, salt); // GOOD
  return hashed;
}


//{/fact}