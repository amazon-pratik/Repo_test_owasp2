#{fact rule=insecure-cryptography@v1.0 defects=1}

import jwt


def bad2(encoded):
    # ruleid: jwt-python-none-alg
    jwt.decode(encoded, None, algorithms=['none'])
    return encoded
#{/fact}
