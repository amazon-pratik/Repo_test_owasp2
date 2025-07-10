#{fact rule=code-injection@v1.0 defects=0}

import code



def ok2() -> None:
    inperpreter = code.InteractiveInterpreter()
    inperpreter.runcode(code.compile_command('print(123)'))


#{/fact}
