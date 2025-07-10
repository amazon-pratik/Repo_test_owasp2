<?php

// {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
// ruleid: wp-php-object-injection-audit
$content = unserialize($POST['post_content']);
// {/fact}

// {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
// ruleid: wp-php-object-injection-audit
$rank_math=unserialize($rank_value);
// {/fact}

// {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
// ruleid: wp-php-object-injection-audit
$import_options = maybe_unserialize($import->options);
// {/fact}

// {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
// ruleid: wp-php-object-injection-audit
$data = unserialize(base64_decode($var));
// {/fact}

// {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}
// ok: wp-php-object-injection-audit
$data = serialize(base64_encode($var))
// {/fact}

?>