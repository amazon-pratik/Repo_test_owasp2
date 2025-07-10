#{fact rule=insecure-cryptography@v1.0 defects=1}

# cf. https://github.com/PyCQA/bandit/blob/b78c938c0bd03d201932570f5e054261e10c5750/examples/crypto-md5.py

from cryptography.hazmat.primitives import hashes
from Crypto.Hash import MD2 as pycrypto_md2
from Crypto.Hash import MD4 as pycrypto_md4
from Crypto.Hash import MD5 as pycrypto_md5
from Crypto.Hash import SHA as pycrypto_sha
from Cryptodome.Hash import MD2 as pycryptodomex_md2
from Cryptodome.Hash import MD4 as pycryptodomex_md4
from Cryptodome.Hash import MD5 as pycryptodomex_md5
from Cryptodome.Hash import SHA as pycryptodomex_sha
from Crypto.Hash import SHA3_256


# ruleid:insecure-hash-algorithm-md5
pycryptodomex_md5.new()

#{/fact}
