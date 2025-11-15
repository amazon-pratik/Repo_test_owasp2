#{fact rule=hardcoded-credentials@v1.0 defects=1}

import jwt

# ruleid: jwt-python-exposed-credentials
payload = {'foo': 'bar','password': 123}


def bad2(secret):
    encoded = jwt.encode(payload, secret, algorithm='HS256')
    return encoded

#{/fact}
