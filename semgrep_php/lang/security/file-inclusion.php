<?php

$user_input = $_GET["tainted"];

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: file-inclusion
include($user_input);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
include('constant.php');
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: file-inclusion
include_once($user_input);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
include_once('constant.php');
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: file-inclusion
require($user_input);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
require('constant.php');
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: file-inclusion
require_once($user_input);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
require_once('constant.php');
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=1}
// ruleid: file-inclusion
include(__DIR__ . $user_input);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
include(__DIR__ . 'constant.php');
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
include_safe(__DIR__ . $user_input);
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
require_once(CONFIG_DIR . '/constant.php');
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
require_once( dirname( __FILE__ ) . '/admin.php' );
// {/fact}

// {fact rule=sendfile-injection@v1.0 defects=0}
// ok: file-inclusion
$pth = 'foo/bar.php';
// {/fact}
require_once $pth;
