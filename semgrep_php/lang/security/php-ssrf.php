<?php

    function test1(){
// {fact rule=server-side-request-forgery@v1.0 defects=1}
 	//ruleid: php-ssrf
        $ch = curl_init($_GET['r']);
// {/fact}
    }

    function test2(){
// {fact rule=server-side-request-forgery@v1.0 defects=1}
        //ruleid: php-ssrf
	    $url = $_GET['r'];
        $ch = curl_init($url);
// {/fact}
    }

    function test3(){
        $ch = curl_init();
// {fact rule=server-side-request-forgery@v1.0 defects=1}
        //ruleid: php-ssrf
        curl_setopt($ch, CURLOPT_URL, $_POST['image_url']);
// {/fact}
    }

    function test4(){
        $ch = curl_init();
// {fact rule=server-side-request-forgery@v1.0 defects=1}
        //ruleid: php-ssrf
        $url = $_GET['r'];
        curl_setopt($ch, CURLOPT_URL, $url);
// {/fact}
    }

    function test5(){
// {fact rule=server-side-request-forgery@v1.0 defects=1}
        //ruleid: php-ssrf
        $url = $_GET['r'];
        $file = fopen($url, 'rb');
// {/fact}
    }

    function test6(){
// {fact rule=server-side-request-forgery@v1.0 defects=1}
        //ruleid: php-ssrf
        $file = fopen($_POST['r'], 'rb');
// {/fact}
    }

    function test7(){
// {fact rule=server-side-request-forgery@v1.0 defects=1}
        //ruleid: php-ssrf
        $url = $_POST['r'];
        $file = file_get_contents($url);
// {/fact}
    }

    function test8(){
// {fact rule=server-side-request-forgery@v1.0 defects=1}
        //ruleid: php-ssrf
        $file = file_get_contents($_POST['r']);
// {/fact}
    }

    function test9(){
// {fact rule=server-side-request-forgery@v1.0 defects=0}
        //ok: php-ssrf
        $file = file_get_contents("index.php");
// {/fact}
    }

    function test10(){
// {fact rule=server-side-request-forgery@v1.0 defects=0}
        //ok: php-ssrf
        $url = $_POST['r'];
        $file = fopen("/tmp/test.txt", 'rb');
// {/fact}
    }

?>
