#{fact rule=code-injection@v1.0 defects=0}

import code


def ok3() -> None:
    inperpreter = code.InteractiveInterpreter()
    pl = code.compile_command('print(123)')
    inperpreter.runcode(pl)

#{/fact}
