<?php

$tainted = $_GET['userinput'];

// {fact rule=code-injection@v1.0 defects=1}
// ruleid: assert-use
assert($tainted);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use
assert('2 > 1');
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// todook: assert-use
assert($tainted > 1);
// {/fact}

Route::get('bad', function ($name) {
// {fact rule=code-injection@v1.0 defects=1}
  // ruleid: assert-use
  assert($name);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
  // ok: assert-use
  assert('2 > 1');
// {/fact}

  // todook: assert-use
  assert($name > 1);
});
