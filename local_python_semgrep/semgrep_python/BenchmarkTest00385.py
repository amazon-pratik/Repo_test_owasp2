#{fact rule=insecure-cryptography@v1.0 defects=0}

# cf. https://github.com/PyCQA/bandit/blob/b1411bfb43795d3ffd268bef17a839dee954c2b1/examples/cipher-modes.py

from cryptography.hazmat.primitives.ciphers.modes import CBC
from cryptography.hazmat.primitives.ciphers.modes import ECB


# Secure mode
# ok: insecure-cipher-mode-ecb
mode = CBC(iv)

#{/fact}
