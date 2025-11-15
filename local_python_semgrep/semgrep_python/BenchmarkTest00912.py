#{fact rule=improper-wildcard-sanitization@v1.0 defects=1}

# cf. https://github.com/PyCQA/bandit/blob/b1411bfb43795d3ffd268bef17a839dee954c2b1/bandit/plugins/injection_wildcard.py

import os as o
import subprocess as subp

# Vulnerable to wildcard injection
# ruleid:system-wildcard-detected
o.system("/bin/tar xvzf *")
# ruleid:system-wildcard-detected
o.system('/bin/chown *')
# ruleid:system-wildcard-detected
o.popen2('/bin/chmod *')

#{/fact}
