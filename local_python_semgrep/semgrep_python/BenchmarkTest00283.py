#{fact rule=os-command-injection@v1.0 defects=0}

import os
from somewhere import something

# ok:dangerous-os-exec
os.execl("/foo/bar", "/foo/bar")


#{/fact}
