const crypto = require('crypto');

var secretText = obj.getSecretText();

//{fact rule=cryptographic-key-generator@v1.0 defects=1}

const desCipher = crypto.createCipher('des', key);
let desEncrypted = desCipher.write(secretText, 'utf8', 'hex'); // BAD: weak encryption

//{/fact}

//{fact rule=cryptographic-key-generator@v1.0 defects=0}

const aesCipher = crypto.createCipher('aes-128', key);
let aesEncrypted = aesCipher.update(secretText, 'utf8', 'hex'); // GOOD: strong encryption

//{/fact}