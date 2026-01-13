<?php

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: exec-use
//exec($user_input);
// {/ex-fact}

// {ex-fact rule=code-injection@v1.0 defects=0}
// ok: exec-use
//exec('whoami');
// {/ex-fact}

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: exec-use
//passthru($user_input);
// {/ex-fact}

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: exec-use
//$proc = proc_open($cmd, $descriptorspec, $pipes);
// {/ex-fact}

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: exec-use
//$handle = popen($user_input, "r");
// {/ex-fact}

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: exec-use
//$output = shell_exec($user_input);
// {/ex-fact}

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: exec-use
//$output = system($user_input, $retval);
// {/ex-fact}

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: exec-use
//pcntl_exec($path);
// {/ex-fact}
