<?php

function encrypt($plaintext, $password) {
    $method = "AES-256-CBC";
    $key = hash('sha256', $password, true);
    $iv = openssl_random_pseudo_bytes(16);
// {fact rule=static-initialization-vector@v1.0 defects=0}
    // ok
    $ciphertext = openssl_encrypt($plaintext, $method, $key, OPENSSL_RAW_DATA, $iv);
// {/fact}
    $hash = hash_hmac('sha256', $ciphertext . $iv, $key, true);

    return $iv . $hash . $ciphertext;
}

function encryptBad($plaintext, $password) {
    $method = "AES-256-CBC";
    $key = hash('sha256', $password, true);
    $iv = "4c25ecc95c8816db753cba44a3b56aca";

// {fact rule=static-initialization-vector@v1.0 defects=1}
    // ruleid: openssl-cbc-static-iv
    $ciphertext = openssl_encrypt($plaintext, $method, $key, OPENSSL_RAW_DATA, $iv);
// {/fact}
    $hash = hash_hmac('sha256', $ciphertext . $iv, $key, true);

    return $iv . $hash . $ciphertext;
}

function encryptBad2($plaintext, $password) {
    $key = hash('sha256', $password, true);
    $iv = "4c25ecc95c8816db753cba44a3b56aca";

// {fact rule=static-initialization-vector@v1.0 defects=1}
    // ruleid: openssl-cbc-static-iv
    $ciphertext = openssl_encrypt($plaintext, "AES-256-CBC", $key, OPENSSL_RAW_DATA, $iv);
// {/fact}
    $hash = hash_hmac('sha256', $ciphertext . $iv, $key, true);

    return $iv . $hash . $ciphertext;
}

function decrypt($ivHashCiphertext, $password) {
    $method = "AES-256-CBC";
    $iv = substr($ivHashCiphertext, 0, 16);
    $hash = substr($ivHashCiphertext, 16, 32);
    $ciphertext = substr($ivHashCiphertext, 48);
    $key = hash('sha256', $password, true);

    if (!hash_equals(hash_hmac('sha256', $ciphertext . $iv, $key, true), $hash)) return null;
// {fact rule=static-initialization-vector@v1.0 defects=0}
    // ok
    return openssl_decrypt($ciphertext, $method, $key, OPENSSL_RAW_DATA, $iv);
// {/fact}
}

function decryptBad($ivHashCiphertext, $password) {
    $method = "AES-256-CBC";
    $iv = "4c25ecc95c8816db753cba44a3b56aca";
    $hash = substr($ivHashCiphertext, 16, 32);
    $ciphertext = substr($ivHashCiphertext, 48);
    $key = hash('sha256', $password, true);

    if (!hash_equals(hash_hmac('sha256', $ciphertext . $iv, $key, true), $hash)) return null;

// {fact rule=static-initialization-vector@v1.0 defects=1}
    // ruleid: openssl-cbc-static-iv
    return openssl_decrypt($ciphertext, $method, $key, OPENSSL_RAW_DATA, $iv);
// {/fact}
}
