<?php

class OpenSslTest{
    public static function decrypt_test_1($crypt, $ky) {
        $key   = html_entity_decode($ky);
        $iv = "@@@@&&&&####$$$$";

// {fact rule=insecure-cryptography@v1.0 defects=1}
        // ruleid: openssl-decrypt-validate
        $data = openssl_decrypt ( $crypt , "AES-128-CBC" , $key, 0, $iv );
// {/fact}
        return $data;
    }

    public static function decrypt_test_2($crypt, $ky) {
        $key   = html_entity_decode($ky);
        $iv = "@@@@&&&&####$$$$";

// {fact rule=insecure-cryptography@v1.0 defects=1}
        // ruleid: openssl-decrypt-validate
        $data = openssl_decrypt ( $crypt , "AES-128-CBC" , $key, 0, $iv );
// {/fact}
        if($data == true){
            return "";
        }

        return $data;
    }

    public static function decrypt_test_3($crypt, $ky) {
        $key   = html_entity_decode($ky);
        $iv = "@@@@&&&&####$$$$";

// {fact rule=insecure-cryptography@v1.0 defects=1}
        // ruleid: openssl-decrypt-validate
        return openssl_decrypt ( $crypt , "AES-128-CBC" , $key, 0, $iv );
// {/fact}
    }

    public static function decrypt_test_ok($crypt, $ky) {
        $key   = html_entity_decode($ky);
        $iv = "@@@@&&&&####$$$$";

// {fact rule=insecure-cryptography@v1.0 defects=0}
        // ok: openssl-decrypt-validate
        $data = openssl_decrypt ( $crypt , "AES-128-CBC" , $key, 0, $iv );
// {/fact}
        if($data == false){
            return "";
        }

        return $data;
    }

    public static function decrypt_test_ok_2($crypt, $ky) {
        $key   = html_entity_decode($ky);
        $iv = "@@@@&&&&####$$$$";

// {fact rule=insecure-cryptography@v1.0 defects=0}
        // ok: openssl-decrypt-validate
        $data = openssl_decrypt ( $crypt , "AES-128-CBC" , $key, 0, $iv );
// {/fact}
        if(false === $data){
            return "";
        }

        return $data;
    }

    public static function decrypt_test_ok_3($crypt, $ky) {
        $key   = html_entity_decode($ky);
        $iv = "@@@@&&&&####$$$$";
    
// {fact rule=insecure-cryptography@v1.0 defects=0}
        // ok: openssl-decrypt-validate
        $data = openssl_decrypt ( $crypt , "AES-128-CBC" , $key, 0, $iv );
// {/fact}
        assertTrue(false !== $data);

        return $data;
    }
}
