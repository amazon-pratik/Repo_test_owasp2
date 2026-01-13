<?php

// {fact rule=code-injection@v1.0 defects=1}
// ruleid: wp-code-execution-audit
$snippetValue = eval('return ' .$sanitizedSnippet . ';');
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
// ruleid: wp-code-execution-audit
$val = call_user_func($filter, $val);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: wp-code-execution-audit
some_other_safe_function($args);
// {/fact}


?>