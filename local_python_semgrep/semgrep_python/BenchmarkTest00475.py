#{fact rule=code-injection@v1.0 defects=0}

import code


def ok4() -> None:
    inperpreter = code.InteractiveInterpreter()
    inperpreter.runsource('print(123)')

#{/fact}
