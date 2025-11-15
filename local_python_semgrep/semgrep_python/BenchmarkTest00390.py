#{fact rule=insecure-file-permissions@v1.0 defects=0}

import os
import stat

# ok:insecure-file-permissions
os.chmod("file", 0o644)
# ok:insecure-file-permissions
os.chmod("file", 0o444)
# ok:insecure-file-permissions
os.chmod("file", stat.S_IRUSR | stat.S_IRGRP | stat.S_IROTH)
# ok:insecure-file-permissions
os.chmod("file", stat.S_IRWXU)

#{/fact}
