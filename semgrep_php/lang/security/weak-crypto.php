<?php

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: weak-crypto
$hashed_password = crypt('mypassword');
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: weak-crypto
$hashed_password = md5('mypassword');
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: weak-crypto
$hashed_password = md5_file('filename.txt');
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: weak-crypto
$hashed_password = sha1('mypassword');
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: weak-crypto
$hashed_password = sha1_file('filename.txt');
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: weak-crypto
$hashed_password = str_rot13('totally secure');
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=0}
// ok: weak-crypto
$hashed_password = sodium_crypto_generichash('mypassword');
// {/fact}
