<?php


preg_replace($user_input_pattern, $replacement, $string);

// {fact rule=code-injection@v1.0 defects=0}
// ok: preg-replace-eval
preg_replace("/some_regexp/", "replacement", $string_before);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: preg-replace-eval
preg_replace(array("/hello/"), array("world"), "hello world");
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
$input = array("/constant/");
// ok: preg-replace-eval
preg_replace($input, array("world"), "hello world");
// {/fact}

