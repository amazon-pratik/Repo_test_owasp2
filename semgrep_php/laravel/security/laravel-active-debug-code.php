<?php
// {fact rule=detect-activated-debug-feature@v1.0 defects=1}
    // ruleid: laravel-active-debug-code
    config(['app.debug' => 'true']);
// {/fact}

// {fact rule=detect-activated-debug-feature@v1.0 defects=1}
    // ruleid: laravel-active-debug-code
    putenv("APP_DEBUG=true");
// {/fact}

// {fact rule=detect-activated-debug-feature@v1.0 defects=1}
    // ruleid: laravel-active-debug-code
    $_ENV['APP_DEBUG'] = 'true';
// {/fact}

// {fact rule=detect-activated-debug-feature@v1.0 defects=0}
    // ok: laravel-active-debug-code
    config(['app.debug' => 'false']);
// {/fact}

// {fact rule=detect-activated-debug-feature@v1.0 defects=0}
    // ok: laravel-active-debug-code
    putenv("APP_DEBUG=false");
// {/fact}

// {fact rule=detect-activated-debug-feature@v1.0 defects=0}
    // ok: laravel-active-debug-code
    $_ENV['APP_DEBUG'] = 'false';
// {/fact}

    // this is ok because it retrieves the value from the env file instead of setting it directly.
// {fact rule=detect-activated-debug-feature@v1.0 defects=0}
    // ok: laravel-active-debug-code
    $value = config('app.debug', 'true');
// {/fact}
?>
