<?php

function test1($value) {
// {fact rule=insecure-cryptography@v1.0 defects=1}
    $pass = md5($value);
    // ruleid: md5-used-as-password
    $user->setPassword($pass);
// {/fact}
}

function test2($value) {
// {fact rule=insecure-cryptography@v1.0 defects=1}
    $pass = hash('md5', $value);
    // ruleid: md5-used-as-password
    $user->setPassword($pass);
// {/fact}
}

function okTest1($value) {
// {fact rule=insecure-cryptography@v1.0 defects=0}
    // ok: md5-used-as-password
    $pass = hash('sha256', $value);
// {/fact}
    $user->setPassword($pass);
}
