<?php

// {fact rule=code-injection@v1.0 defects=1}
// ruleid: backticks-use
echo `ping -n 3 {$user_input}`;
// {/fact}
