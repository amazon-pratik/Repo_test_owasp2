//<?php

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-manipulation-audit
//wp_delete_file( $file_path );
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-manipulation-audit
//unlink($file_path);
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=0}
// ok: wp-file-manipulation-audit
//some_other_function($args);
// {/ex-fact}


//?>
