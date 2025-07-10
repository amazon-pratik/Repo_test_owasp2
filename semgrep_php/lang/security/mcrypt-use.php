<?php

// {fact rule=dangerous-function-usage@v1.0 defects=1}
// ruleid: mcrypt-use
mcrypt_ecb(MCRYPT_BLOWFISH, $key, base64_decode($input), MCRYPT_DECRYPT);
// {/fact}

// {fact rule=dangerous-function-usage@v1.0 defects=1}
// ruleid: mcrypt-use
mcrypt_create_iv($iv_size, MCRYPT_RAND);
// {/fact}

// {fact rule=dangerous-function-usage@v1.0 defects=1}
// ruleid: mcrypt-use
mdecrypt_generic($td, $c_t);
// {/fact}

// {fact rule=dangerous-function-usage@v1.0 defects=0}
// ok: mcrypt-use
sodium_crypto_secretbox("Hello World!", $nonce, $key);
// {/fact}

// {fact rule=dangerous-function-usage@v1.0 defects=0}
// ok: mcrypt-use
openssl_encrypt($plaintext, $cipher, $key, $options=0, $iv, $tag);
// {/fact}
