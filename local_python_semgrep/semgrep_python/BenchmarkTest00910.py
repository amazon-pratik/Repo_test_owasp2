#{fact rule=os-command-injection@v1.0 defects=0}

import subprocess
import sys



# ok:subprocess-shell-true
subprocess.call("grep -R {} .".format(sys.argv[1]))

#{/fact}
