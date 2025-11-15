#{fact rule=insecure-cryptography@v1.0 defects=0}

import hashlib
from cryptography.hazmat.primitives import hashes
from Crypto.Hash import MD5, SHA256


def ok3(user, pwtext):
    h = SHA256.new()
    h.update(bytes(pwtext))
    # ok: md5-used-as-password
    user.setPassword(h.hexdigest())

#{/fact}
