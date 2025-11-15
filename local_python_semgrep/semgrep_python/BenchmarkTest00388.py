#{fact rule=insecure-file-permissions@v1.0 defects=1}

import os
import stat

def ensure_exec_perms(file_):
    st = os.stat(file_)
    # ruleid:insecure-file-permissions
    os.chmod(file_, st.st_mode | stat.S_IXUSR | stat.S_IXGRP | stat.S_IXOTH)
    return file_


#{/fact}
