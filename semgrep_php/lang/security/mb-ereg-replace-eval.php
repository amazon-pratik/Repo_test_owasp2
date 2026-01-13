<?php

// {fact rule=code-injection@v1.0 defects=1}
// ruleid: mb-ereg-replace-eval
mb_ereg_replace($pattern, $replacement, $string, $user_input_options);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: mb-ereg-replace-eval
mb_ereg_replace($pattern, $replacement, $string, "msr");
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: mb-ereg-replace-eval
mb_ereg_replace($pattern, $replacement, $string);
// {/fact}
