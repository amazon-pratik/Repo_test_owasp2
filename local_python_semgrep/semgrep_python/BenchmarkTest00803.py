#{fact rule=insecure-cryptography@v1.0 defects=0}

import os
from cryptography.hazmat import backends
from cryptography.hazmat.primitives.asymmetric import ec

# ok: insufficient-ec-key-size
ec.generate_private_key(curve=ec.SECP256K1,
                         backend=backends.default_backend())


#{/fact}
