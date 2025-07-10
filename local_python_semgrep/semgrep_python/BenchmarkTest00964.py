#{fact rule=insecure-cryptography@v1.0 defects=0}

import hashlib
from cryptography.hazmat.primitives import hashes
from Crypto.Hash import MD5, SHA256

#### True Negatives ####
def ok1(user, pwtext):
    sha = hashlib.sha256(pwtext).hexdigest()
    # ok: md5-used-as-password
    user.setPassword(sha)

#{/fact}
