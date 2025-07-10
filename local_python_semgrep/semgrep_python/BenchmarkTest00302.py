#{fact rule=code-injection@v1.0 defects=0}

import _testcapi
from test import support


def okTest(payload: str) -> None:
    # ok: dangerous-testcapi-run-in-subinterp
    _testcapi.run_in_subinterp("print('Hello world')")

#{/fact}
