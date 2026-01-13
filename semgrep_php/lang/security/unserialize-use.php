<?php

$data = $_GET["data"];
// {fact rule=untrusted-deserialization@v1.0 defects=1}
// ruleid: unserialize-use
$object = unserialize($data);
// {/fact}

// {fact rule=untrusted-deserialization@v1.0 defects=0}
// ok: unserialize-use
$object2 = unserialize('O:1:"a":1:{s:5:"value";s:3:"100";}');
// {/fact}
