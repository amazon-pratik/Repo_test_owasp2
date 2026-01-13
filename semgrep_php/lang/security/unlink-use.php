<?php

$data = $_GET["data"];
// {fact rule=server-side-request-forgery@v1.0 defects=1}
// ruleid: unlink-use
unlink("/storage/" . $data . "/test");
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok: unlink-use
unlink('/storage/foobar/test');
// {/fact}
