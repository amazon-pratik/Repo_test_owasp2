<?php

// redirect should be followed by exit

// {fact rule=open-redirect@v1.0 defects=1}
// ruleid: wp-open-redirect-audit
wp_redirect( $url);
// {/fact}
exit;


// {fact rule=open-redirect@v1.0 defects=0}
// ok: wp-open-redirect-audit
// safe redirect
wp_safe_redirect($url);
// {/fact}
exit;
?>