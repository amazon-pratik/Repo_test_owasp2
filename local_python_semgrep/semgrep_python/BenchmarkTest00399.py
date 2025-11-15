#{fact rule=insecure-cryptography@v1.0 defects=1}

# cf. https://github.com/PyCQA/bandit/blob/b1411bfb43795d3ffd268bef17a839dee954c2b1/examples/hashlib_new_insecure_functions.py

import hashlib

# ruleid:insecure-hash-function
hashlib.new(name='md5', string='test')


#{/fact}
