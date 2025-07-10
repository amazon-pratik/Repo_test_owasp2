#{fact rule=improper-wildcard-sanitization@v1.0 defects=0}

# cf. https://github.com/PyCQA/bandit/blob/b1411bfb43795d3ffd268bef17a839dee954c2b1/bandit/plugins/injection_wildcard.py

import os as o
import subprocess as subp



# Not vulnerable to wildcard injection
# ok:system-wildcard-detected
subp.Popen('/bin/rsync *')
# ok:system-wildcard-detected
subp.Popen("/bin/chmod *")

#{/fact}
