#{fact rule=insecure-cryptography@v1.0 defects=1}

import os
from cryptography.hazmat import backends
from cryptography.hazmat.primitives.asymmetric import rsa

# ruleid: insufficient-rsa-key-size
rsa.generate_private_key(65537,
                         1024,
                         backends.default_backend())

#{/fact}
