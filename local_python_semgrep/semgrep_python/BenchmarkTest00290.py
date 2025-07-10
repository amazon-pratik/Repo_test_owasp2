#{fact rule=code-injection@v1.0 defects=0}

import _xxsubinterpreters


def okRun():
    # ok: dangerous-subinterpreters-run-string
    _xxsubinterpreters.run_string(_xxsubinterpreters.create(), "print(123)")

#{/fact}
