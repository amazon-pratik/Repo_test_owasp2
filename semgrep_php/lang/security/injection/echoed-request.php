<?php

// example key-value: name=%3Cscript%3Econfirm%28%29%3C%2Fscript%3E
function dangerousPrintUsage() {
    $name = $_REQUEST['name'];
// {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
    // ruleid: echoed-request
    print("Hello : $name");
// {/fact}

// {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
    // ruleid: echoed-request
    print("Hello : " . $name);
// {/fact}
}

function safePrintUsage() {
    $name = $_REQUEST['name'];
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    print("Hello : " . htmlentities($name));
// {/fact}
}

function doSmth() {
    $name = $_REQUEST['name'];
// {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
    // ruleid: echoed-request
    echo "Hello :".$name;
// {/fact}
}

function doSmth2() {
// {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
    // ruleid: echoed-request
    echo "Hello ".$_POST['name']." !";
// {/fact}
}

function doSmth3() {
    $name = $_GET['name'];
    if (str_contains($name, 'foobar')) {
// {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
        // ruleid: echoed-request
        echo "Hello :".$name;
// {/fact}
    }
}

function doSmth4() {
// {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
    // ruleid: echoed-request
    echo "Hello ".htmlentities($_POST['name'])." !".$_POST['lastname'];
// {/fact}
}

function doSmth5() {
// {fact rule=reflected-cross-site-scripting@v1.0 defects=1}
     // ruleid: echoed-request
    echo "Hello ".trim($_POST['name']);
// {/fact}
}

function doOK1() {
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    echo "Hello ".htmlentities($_POST['name'])." !";
// {/fact}
}

function doOK2() {
    $input = $_GET['name'];
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    echo "Hello ".htmlspecialchars($input)." !";
// {/fact}
}

function doOK3() {
    $safevar = "Hello ".htmlentities(trim($_GET['name']));
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    echo $safevar;
// {/fact}
}

function doOK4() {
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    echo "Hello ".isset($_POST['name'])." !";
// {/fact}
}

function doOK5() {
    $safevar = empty($_GET['name']);
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    echo "Hello $safevar !";
// {/fact}
}

function doOK6() {
    $safevar = "Hello ".htmlentities($_GET['name']);
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    echo $safevar;
// {/fact}
}

function doOK7() {
    $safevar = "Hello ".htmlspecialchars($_GET['name']);
// {fact rule=reflected-cross-site-scripting@v1.0 defects=0}
    // ok: echoed-request
    echo $safevar;
// {/fact}
}


