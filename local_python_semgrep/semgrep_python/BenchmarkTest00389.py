#{fact rule=insecure-file-permissions@v1.0 defects=1}

import os
import stat

def ensure_exec_perms2(file_):
    st = os.stat(file_)
    # ruleid:insecure-file-permissions
    os.chmod(file_, st.st_mode | 0o111)
    return file_

#{/fact}
