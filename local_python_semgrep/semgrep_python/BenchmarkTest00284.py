#{fact rule=os-command-injection@v1.0 defects=0}

import os
from somewhere import something


# ok:dangerous-os-exec
os.execv("/foo/bar", ["/foo/bar", "-a", "-b"])

cmd = something()

#{/fact}
