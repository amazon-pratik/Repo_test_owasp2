#{fact rule=hardcoded-credentials@v1.0 defects=1}

import jwt

# ruleid: jwt-python-exposed-credentials
payload = {'foo': 'bar','password': 123}

def bad1(secret, value):
    # ruleid: jwt-python-exposed-credentials
    encoded = jwt.encode({'some': 'payload','password': value}, secret, algorithm='HS256')
    return encoded


#{/fact}
