#{fact rule=os-command-injection@v1.0 defects=0}

# cf. https://github.com/returntocorp/semgrep/blob/develop/docs/writing_rules/examples.md#auditing-dangerous-function-use

import subprocess
import sys

# ok:dangerous-subprocess-use
subprocess.call(["echo", "a", ";", "rm", "-rf", "/"])


#{/fact}
