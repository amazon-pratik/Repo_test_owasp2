#{fact rule=code-injection@v1.0 defects=0}

import code



def ok1() -> None:
    console = code.InteractiveConsole()
    console.push('print(123)')


#{/fact}
