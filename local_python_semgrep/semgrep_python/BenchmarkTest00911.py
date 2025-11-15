#{fact rule=os-command-injection@v1.0 defects=0}

import subprocess
import sys

# ok:subprocess-shell-true
subprocess.call("echo 'hello'", shell=True)


#{/fact}
