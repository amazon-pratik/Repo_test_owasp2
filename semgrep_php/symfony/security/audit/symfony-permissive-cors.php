<?php
namespace symfony;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Response as FooResponse;

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
// ruleid: symfony-permissive-cors
$response = new Response('content', Response::HTTP_OK, ['Access-Control-Allow-Origin' => '*']);
// {/fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
// ruleid: symfony-permissive-cors
$response = new Response('content', Response::HTTP_OK, Array('Access-Control-Allow-Origin' => '*'));
// {/fact}

// {ex-fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
// ruleid: symfony-permissive-cors
//$response = new response('content', Response::HTTP_OK, Array('Access-Control-Allow-Origin' => '*'));
// {/ex-fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
// ruleid: symfony-permissive-cors
$response = new FooResponse('content', Response::HTTP_OK, ['Access-Control-Allow-Origin' => '*']);
// {/fact}


$headers = ['Access-Control-Allow-Origin' => '*'];
// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
// ruleid: symfony-permissive-cors
$response = new Response('content', Response::HTTP_OK, $headers);
// {/fact}


// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
// ruleid: symfony-permissive-cors
$response->headers->set('  access-control-allow-origin  ', '  *  ');
// {/fact}


$safe = ['foo' => 'bar'];
// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=0}
// ok: symfony-permissive-cors
$response = new Response('content', Response::HTTP_OK, $safe);
// {/fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=0}
// ok: symfony-permissive-corsx
$response = new Response('content', Response::HTTP_OK, ['Access-Control-Allow-Origin' => 'https://www.example.com']);
// {/fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=0}
// ok: symfony-permissive-cors
$response = new Response('content', Response::HTTP_OK, ['Other-Property' => '*']);
// {/fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=0}
// ok: symfony-permissive-cors
$response = new Foo('content', Response::HTTP_OK, ['Access-Control-Allow-Origin' => '*']);
// {/fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=0}
// ok: symfony-permissive-cors
$response->headers->set('Access-Control-Allow-Origin', 'foo');
// {/fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=0}
// ok: symfony-permissive-cors
$response->headers->set('Other-Property', '*');
// {/fact}
