#{fact rule=os-command-injection@v1.0 defects=0}

import os
import shlex
from somewhere import something

# ok:dangerous-spawn-process
os.spawnlp(os.P_WAIT, "ls")


#{/fact}
