#{fact rule=insecure-cryptography@v1.0 defects=0}

import os
from cryptography.hazmat import backends
from cryptography.hazmat.primitives.asymmetric import rsa


# ok: insufficient-rsa-key-size
rsa.generate_private_key(65537,
                         2048,
                         backends.default_backend())


#{/fact}
