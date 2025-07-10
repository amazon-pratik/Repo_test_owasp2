#{fact rule=os-command-injection@v1.0 defects=1}

# cf. https://github.com/returntocorp/semgrep/blob/develop/docs/writing_rules/examples.md#auditing-dangerous-function-use

import subprocess
import sys


# ruleid:dangerous-subprocess-use
subprocess.run("grep -R {} .".format(sys.argv[1]), shell=True)


#{/fact}
