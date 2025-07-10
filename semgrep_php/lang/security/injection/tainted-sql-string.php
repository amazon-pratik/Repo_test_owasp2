<?php

// True Positives

function test1() {
// {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    $query = "SELECT * FROM table WHERE Id = '".$_GET['url']."'";
// {/fact}
    $info = mysql_query($query);
    return $info;
}

function test2() {
    $part = $_POST['url'];
// {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    $query = "SELECT * FROM table WHERE Id = '$part'";
// {/fact}
    $info = mysql_query($query);
    return $info;
}

function test3() {
// {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    $query = "SELECT * FROM table WHERE Id = '{$_REQUEST['url']}'";
// {/fact}
    $info = mysql_query($query);
    return $info;
}

function test4() {
// {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: tainted-sql-string
    $query = sprintf("SELECT * FROM table WHERE Id = '%s'", $_COOKIE['foo']);
// {/fact}
    $info = mysql_query($query);
    return $info;
}

// True Negatives

function test1() {
// {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    $query = 'SELECT * FROM table WHERE Id = 1';
// {/fact}
    $info = mysql_query($query);
    return $info;
}

function test2() {
    $value = 1;
// {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    $query = "SELECT * FROM table WHERE Id = '".$value."'";
// {/fact}
    $info = mysql_query($query);
    return $info;
}

function test3() {
// {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    $query = "SELECT * FROM table WHERE Id = '{$foobar() ? 1 : 2}'";
// {/fact}
    $info = mysql_query($query);
    return $info;
}

function test4() {
    $value = 1;
// {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    $query = sprintf("SELECT * FROM table WHERE Id = '%s'", $value);
// {/fact}
    $info = mysql_query($query);
    return $info;
}

function test5() {
    $part = $_POST['url'];
    $part = mysqli_real_escape_string($part);
// {fact rule=sql-injection@v1.0 defects=0}
    // ok: tainted-sql-string
    $query = sprintf("SELECT * FROM table WHERE Id = '" . $part . "'");
// {/fact}
    $info = mysql_query($query);
    return $info;
}
