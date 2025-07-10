#{fact rule=insecure-cryptography@v1.0 defects=0}

from cryptography.hazmat import backends
from cryptography.hazmat.primitives.asymmetric import dsa

# ok: insufficient-dsa-key-size
dsa.generate_private_key(key_size=2048,
                         backend=backends.default_backend())

#{/fact}
