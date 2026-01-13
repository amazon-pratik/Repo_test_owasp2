<?php

// {fact rule=coral-csrf-rule@v1.0 defects=1}
// ruleid: wp-csrf-audit
check_ajax_referer( 'wpforms-admin', 'nonce', false );
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
// ok: wp-csrf-audit
check_ajax_referer( 'wpforms-admin', 'nonce', true );
// {/fact}


// {fact rule=coral-csrf-rule@v1.0 defects=0}
// ok: wp-csrf-audit
check_ajax_referer( 'wpforms-admin', 'nonce' );
// {/fact}
?>