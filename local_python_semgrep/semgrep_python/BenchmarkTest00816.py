#{fact rule=weak-obfuscation-of-request@v1.0 defects=0}

import jwt

# ruleid: jwt-python-hardcoded-secret
secret_const = "this-is-secret"

def ok(secret_key):
    encoded = jwt.encode({'some': 'payload'}, secret_key, algorithm='HS256')
    return encoded

#{/fact}
