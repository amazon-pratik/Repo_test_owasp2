#{fact rule=insecure-cryptography@v1.0 defects=1}

# cf. https://github.com/PyCQA/bandit/blob/b78c938c0bd03d201932570f5e054261e10c5750/examples/crypto-md5.py

import hashlib


# ruleid:insecure-hash-algorithm-md5
hashlib.md5(1).hexdigest()


#{/fact}
