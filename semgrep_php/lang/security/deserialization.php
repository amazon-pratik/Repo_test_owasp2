
<?php

/* Suppose that $var_array is an array returned from
   wddx_deserialize */

$size = "large";
$var_array = array("color" => "blue",
                   "size"  => "medium",
                   "shape" => "sphere");
// {fact rule=untrusted-deserialization@v1.0 defects=0}
// ok: extract-user-data
extract($var_array, EXTR_PREFIX_SAME, "wddx");
// {/fact}

$bad = $_GET['some_param'];
// {fact rule=untrusted-deserialization@v1.0 defects=1}
// ruleid:extract-user-data
extract($bad, EXTR_PREFIX_SAME, "wddx");
// {/fact}
echo "$color, $size, $shape, $wddx_size\n";

$bad2 = $_FILES["/some/bad/path"];
// {fact rule=untrusted-deserialization@v1.0 defects=1}
// ruleid:extract-user-data
extract($bad2, EXTR_PREFIX_SAME, "wddx");
// {/fact}

// {fact rule=untrusted-deserialization@v1.0 defects=0}
// ok: extract-user-data
$ok = $_FILES["/some/bad/path"];
// {/fact}
extract($ok, EXTR_SKIP, "wddx");
?>
