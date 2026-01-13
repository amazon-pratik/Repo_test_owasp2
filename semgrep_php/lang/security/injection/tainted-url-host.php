<?php

function make_request($url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}

// True Positives

function test1() {
// {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: tainted-url-host
    $url = 'https://'.$_GET['url'].'/foobar';
// {/fact}
    $info = make_request($url);
    return $info;
}

function test2() {
    $part = $_POST['url'];
// {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: tainted-url-host
    $url = "https://$part/foobar";
// {/fact}
    $info = make_request($url);
    return $info;
}

function test3() {
// {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: tainted-url-host
    $url = "https://{$_REQUEST['url']}/foobar";
// {/fact}
    $info = make_request($url);
    return $info;
}

function test4() {
// {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid: tainted-url-host
    $url = sprintf('https://%s/%s/', $_COOKIE['foo'], $bar);
// {/fact}
    $info = make_request($url);
    return $info;
}

// True Negatives

function test1() {
// {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: tainted-url-host
    $url = 'https://www.google.com/'.$_GET['url'].'/foobar';
// {/fact}
    $info = make_request($url);
    return $info;
}

function test2() {
    $part = $_POST['url'];
// {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: tainted-url-host
    $url = "some random text /$part/ foobar";
// {/fact}
    $info = make_request($url);
    return $info;
}

function test3() {
// {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: tainted-url-host
    $url = "https://www.google.com/{$_REQUEST['url']}/foobar";
// {/fact}
    $info = make_request($url);
    return $info;
}

function test4() {
// {fact rule=server-side-request-forgery@v1.0 defects=0}
    // ok: tainted-url-host
    $url = sprintf('some random format string %s %s', $_COOKIE['foo'], $bar);
// {/fact}
    $info = make_request($url);
    return $info;
}
