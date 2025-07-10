#{fact rule=insecure-cryptography@v1.0 defects=0}

import hashlib
from cryptography.hazmat.primitives import hashes
from Crypto.Hash import MD5, SHA256

def ok2(user, pwtext):
    digest = hashes.Hash(hashes.SHA256())
    digest.update(bytes(pwtext))
    # ok: md5-used-as-password
    user.setPassword(digest.finalize())

#{/fact}
