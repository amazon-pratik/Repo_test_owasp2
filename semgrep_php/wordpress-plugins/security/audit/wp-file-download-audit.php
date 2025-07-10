<?php

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-download-audit
$json = file_get_contents( 'php://input' );
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-download-audit
readfile($zip_name);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-download-audit
$localeFunctions = file($functionNamesFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: wp-file-download-audit
some_other_function($args);
// {/fact}


?>
