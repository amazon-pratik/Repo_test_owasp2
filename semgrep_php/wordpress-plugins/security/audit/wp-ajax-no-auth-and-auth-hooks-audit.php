<?php

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: wp-ajax-no-auth-and-auth-hooks-audit
add_action( 'wp_ajax_priv_upload', 'auth_upload' );
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: wp-ajax-no-auth-and-auth-hooks-audit
add_action( 'wp_ajax_nopriv_upload', 'no_auth_upload');
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=0}
// ok: wp-ajax-no-auth-and-auth-hooks-audit
add_action('plugins_loaded','upload_plugins_loaded');
// {/fact}



?>