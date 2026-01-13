<?php

$tainted = $_GET["tainted"];
// {fact rule=server-side-request-forgery@v1.0 defects=1}
// ruleid: tainted-filename
hash_file('sha1', $tainted);
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
// ruleid: tainted-filename
file($tainted);
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok: tainted-filename
hash_file($tainted, 'file.txt');
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
// ruleid: tainted-filename
file(dirname($tainted));
// {/fact}

// Sanitized
// {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok: tainted-filename
file(basename($tainted));
// {/fact}


