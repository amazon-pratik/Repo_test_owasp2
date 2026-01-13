<?php

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: assert-use-audit
//assert($user_input);
// {/ex-fact}

// {fact rule=code-injection@v1.0 defects=1}
// ruleid: assert-use-audit
assert($_GET['something']);
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
// ruleid: assert-use-audit
assert($_POST[$param]);
// {/fact}

// {ex-fact rule=code-injection@v1.0 defects=1}
// ruleid: assert-use-audit
//assert($someobj->name);
// {/ex-fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert('2 > 1');
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($user_input > 1);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok < 1 || $ok > 2);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok->count < 1 || $ok > 2);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok != "something");
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok!="something");
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok instanceof FakeClass);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok[$param] instanceof FakeClass);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok['foo'] instanceof FakeClass);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok: assert-use-audit
assert($ok->property instanceof FakeClass);
// {/fact}