//<?php

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-inclusion-audit
//require $located;
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-inclusion-audit
//require_once ABSPATH . 'wp-admin/includes/plugin.php';
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-inclusion-audit
//include __DIR__ . '/wp-hooks.php';
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-inclusion-audit
//include_once($extension_upload_value);
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-inclusion-audit
//$contents = json_decode( fread( $handle, filesize( $eventInfoFile ) ) );
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: wp-file-inclusion-audit
//$read_text_ser = fread($open_txt , filesize($import_txt_path));
// {/ex-fact}

// {ex-fact rule=sendfile-injection@v1.0 defects=0}
//ok: wp-file-inclusion-audit
//some_other_function($args);
// {/ex-fact}


//?>