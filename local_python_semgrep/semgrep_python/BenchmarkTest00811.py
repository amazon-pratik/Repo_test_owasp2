#{fact rule=weak-obfuscation-of-request@v1.0 defects=0}

import jwt

# ruleid: jwt-python-exposed-credentials
payload = {'foo': 'bar','password': 123}

def ok(secret_key):
    # ok: jwt-python-exposed-credentials
    encoded = jwt.encode({'some': 'payload'}, secret_key, algorithm='HS256')
    return encoded

#{/fact}
