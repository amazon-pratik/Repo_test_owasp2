#{fact rule=insecure-cryptography@v1.0 defects=1}

import os
from cryptography.hazmat import backends
from cryptography.hazmat.primitives.asymmetric import ec

# ruleid: insufficient-ec-key-size
ec.generate_private_key(ec.SECT163K1,
                         backends.default_backend())

#{/fact}
