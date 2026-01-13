<?php

$username = $_COOKIE['username'];
// {fact rule=os-command-injection@v1.0 defects=1}
//ruleid: tainted-exec
exec("wto -n \"$username\" -g", $ret);
// {/fact}


$fullpath = $_POST['fullpath'];
// {fact rule=os-command-injection@v1.0 defects=0}
//ok: tainted-exec
$filesize = trim(shell_exec('stat -c %s ' . escapeshellarg($fullpath)));
// {/fact}

$jobName = $_REQUEST['jobName'];
$cmd = sprintf("rsyncmd -l \"$xmlPath\" -r %s >/dev/null", $jobName);
// {fact rule=os-command-injection@v1.0 defects=1}
//ruleid: tainted-exec
system($cmd);
// {/fact}

$errorCode = escapeshellarg($_POST['errorCode']);
$func = escapeshellarg($_POST['func']);
$uuid = str_replace(PHP_EOL, '', file_get_contents("/proc/sys/kernel/random/uuid"));
$logsCmd = sprintf('%s%s%s',
  "wdlog -l INFO -s 'adminUI' -m 'firmware_upload_page' function:string=$func ",
  "status:string='updateFail' errorCode:string=$errorCode ",
  "corid:string='AUI:$uuid' >/dev/null 2>&1"
);
// {fact rule=os-command-injection@v1.0 defects=0}
//ok: tainted-exec
exec($logsCmd);
// {/fact}

$arg = $_POST['arg'];
$cmd = "logwdweb --post_migration_onboarding -%s %s";
$cmd_logwdweb = "logwdweb --post_migration_onboarding --page %s %s";
$_arg = sprintf("--status %s", $arg);
$cmd = sprintf($cmd_logwdweb, "raidRoaming", $_arg);
// {fact rule=os-command-injection@v1.0 defects=1}
//ruleid: tainted-exec
pclose(popen($cmd, 'r'));
// {/fact}
?>
