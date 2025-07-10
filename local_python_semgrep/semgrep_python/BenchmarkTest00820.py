#{fact rule=code-injection@v1.0 defects=1}

from logging.config import listen

PORT_NUMBER = 1234

def start_log():
    # ruleid: listen-eval
    t = listen(PORT_NUMBER)
    t.start()

#{/fact}
