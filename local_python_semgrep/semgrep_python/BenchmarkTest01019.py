#{fact rule=os-command-injection@v1.0 defects=1}

import subprocess
import sys


# ruleid:subprocess-shell-true
subprocess.call("grep -R {} .".format(sys.argv[1]), shell=True, cwd="/home/user")


#{/fact}
