<?php

// {fact rule=improper-access-control@v1.0 defects=1}
// ruleid: tainted-session
$_SESSION[$_POST['input']] = true;
// {/fact}

$inputA = $_POST['input'];
// {fact rule=improper-access-control@v1.0 defects=1}
// ruleid: tainted-session
$_SESSION[$inputA] = true;
// {/fact}

// {fact rule=improper-access-control@v1.0 defects=0}
// ok: tainted-session
$_SESSION['prefix' . $_POST['input']] = true;
// {/fact}

// {fact rule=improper-access-control@v1.0 defects=0}
// ok: tainted-session
$_SESSION['prefix'][$_POST['input']] = true;
// {/fact}

// {fact rule=improper-access-control@v1.0 defects=0}
// ok: tainted-session
$_SESSION['key'] = $_POST['input'];
// {/fact}

$inputB = $_POST['input'];
$inputB = md5($inputB);
// {fact rule=improper-access-control@v1.0 defects=0}
// ok: tainted-session
$_SESSION[$inputB] = true;
// {/fact}

$inputC = $_POST['input'];
$inputC = trim($inputC);
// {fact rule=improper-access-control@v1.0 defects=1}
// ruleid: tainted-session
$_SESSION[$inputC] = true;
// {/fact}
