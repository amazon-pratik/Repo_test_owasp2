<?php

// {fact-ex rule=os-command-injection@v1.0 defects=1}
// ruleid: wp-command-execution-audit
//exec('rm -rf ' . $dir, $o, $r);
// {/fact-ex}

// {fact-ex rule=os-command-injection@v1.0 defects=1}
// ruleid: wp-command-execution-audit
//$stderr = shell_exec($command);
// {/fact-ex}

// {fact rule=os-command-injection@v1.0 defects=0}
// ok: wp-command-execution-audit
some_other_safe_function($args);
// {/fact}


?>
