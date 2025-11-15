#{fact rule=insecure-cryptography@v1.0 defects=1}

import hashlib
from cryptography.hazmat.primitives import hashes
from Crypto.Hash import MD5, SHA256

#### True Positives ####
def ex1(user, pwtext):
    md5 = hashlib.md5(pwtext).hexdigest()
    # ruleid: md5-used-as-password
    user.setPassword(md5)

#{/fact}
