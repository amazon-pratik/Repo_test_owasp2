<?php
namespace testing;

// {fact rule=origin-validation-error@v1.0 defects=1}
// ruleid: php-permissive-cors
header("Access-Control-Allow-Origin: *");
// {/fact}

// {fact rule=origin-validation-error@v1.0 defects=1}
// ruleid: php-permissive-cors
header("Access-Control-Allow-Origin:* ");
// {/fact}

// {fact rule=origin-validation-error@v1.0 defects=1}
// ruleid: php-permissive-cors
Header("access-control-allow-origin: *");
// {/fact}

// {fact rule=origin-validation-error@v1.0 defects=0}
// ok: php-permissive-cors
header("Access-Control-Allow-Origin: *something*");
// {/fact}

// {fact rule=origin-validation-error@v1.0 defects=0}
// ok: php-permissive-cors
header("Other-Property: *");
// {/fact}
