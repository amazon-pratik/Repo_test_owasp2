<?php

$parts = explode("/", $_SERVER['PATH_INFO']);
$controllerName = $parts[0];

// {fact rule=unsafe-reflection@v1.0 defects=1}
// ruleid: tainted-object-instantiation
$controller = new $controllerName($parts[1]);
// {/fact}

// {fact rule=unsafe-reflection@v1.0 defects=0}
// ok: tainted-object-instantiation
$controller = new MyController($controllerName);
// {/fact}

// {fact rule=unsafe-reflection@v1.0 defects=0}
// ok: tainted-object-instantiation
$a = "MyController";
$controller = new $a();
// {/fact}
