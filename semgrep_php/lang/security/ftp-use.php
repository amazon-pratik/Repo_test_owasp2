<?php

// {fact rule=insecure-connection@v1.0 defects=1}
// ruleid: ftp-use
$conn_id = ftp_connect($ftp_server);
// {/fact}

// {fact rule=insecure-connection@v1.0 defects=1}
// ruleid: ftp-use
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
// {/fact}

// {fact rule=insecure-connection@v1.0 defects=0}
// ok: ftp-use
ssh2_scp_send($connection, '/local/filename', '/remote/filename', 0644);
// {/fact}
