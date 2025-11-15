#{fact rule=os-command-injection@v1.0 defects=0}

import os
import shlex
from somewhere import something


# ok:dangerous-spawn-process
os.spawnv(os.P_WAIT, "/bin/ls")

#{/fact}
