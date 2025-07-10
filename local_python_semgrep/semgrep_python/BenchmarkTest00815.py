#{fact rule=weak-obfuscation-of-request@v1.0 defects=1}

import jwt

# ruleid: jwt-python-hardcoded-secret
secret_const = "this-is-secret"

def bad2():
    # ruleid: jwt-python-hardcoded-secret
    encoded = jwt.encode({'some': 'payload'}, secret_const, algorithm='HS256')
    return encoded

#{/fact}
