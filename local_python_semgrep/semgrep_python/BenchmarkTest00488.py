#{fact rule=os-command-injection@v1.0 defects=1}

import os
import shlex
from somewhere import something



# ruleid:dangerous-spawn-process
os.spawnl(os.P_WAIT, "/bin/bash", "-c", something())

#{/fact}
