<?php

$data = $_GET["data"];
// {fact rule=http-response-splitting@v1.0 defects=1}
// ruleid: non-literal-header
header("Some-Header: $data");
// {/fact}

$data = $_GET["data"];
// {fact rule=http-response-splitting@v1.0 defects=1}
// ruleid: non-literal-header
header("Some-Header: ".$data);
// {/fact}

// {fact rule=http-response-splitting@v1.0 defects=0}
// ok: non-literal-header
header("Some-Header: value");
// {/fact}
