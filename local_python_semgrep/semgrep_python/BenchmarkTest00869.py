#{fact rule=insecure-cryptography@v1.0 defects=1}

import hashlib
from cryptography.hazmat.primitives import hashes
from Crypto.Hash import MD5, SHA256

#### True Positives ####

def ex2(user, pwtext):
    digest = hashes.Hash(hashes.MD5())
    digest.update(bytes(pwtext))
    # ruleid: md5-used-as-password
    user.setPassword(digest.finalize())

#{/fact}
