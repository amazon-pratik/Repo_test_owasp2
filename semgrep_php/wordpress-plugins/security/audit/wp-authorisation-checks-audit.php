<?php

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: wp-authorisation-checks-audit
if ( is_admin() ) {
}
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: wp-authorisation-checks-audit
return is_user_logged_in() ? get_current_user_id() : '';
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: wp-authorisation-checks-audit
if ( ! current_user_can( 'install_languages' ) ) {

}
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=0}
// ok: wp-authorisation-checks-audit
get_current_user_id();
// {/fact}

?>