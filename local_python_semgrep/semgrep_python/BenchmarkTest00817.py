#{fact rule=insecure-cryptography@v1.0 defects=1}

import jwt

def bad1():
    # ruleid: jwt-python-none-alg
    encoded = jwt.encode({'some': 'payload'}, None, algorithm='none')
    return encoded

#{/fact}
