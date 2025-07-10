//<?php

// {ex-fact rule=os-command-injection@v1.0 defects=1}
// ruleid: eval-use
//eval($user_input);
// {/ex-fact}

// {ex-fact rule=os-command-injection@v1.0 defects=0}
// ok: eval-use
//eval('echo "OK"');
// {/ex-fact}
