#{fact rule=weak-obfuscation-of-request@v1.0 defects=0}

import jwt


def ok(secret_key):
    # ok: jwt-python-exposed-data
    encoded = jwt.encode({'some': 'payload'}, secret_key, algorithm='HS256')
    return encoded

#{/fact}
