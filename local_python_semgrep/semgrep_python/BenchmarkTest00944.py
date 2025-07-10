#{fact rule=incorrect-authentication-exploitation@v1.0 defects=1}

# cf. https://github.com/we45/Vulnerable-Flask-App/blob/752ee16087c0bfb79073f68802d907569a1f0df7/app/app.py#L96

import jwt
from jwt.exceptions import DecodeError, MissingRequiredClaimError, InvalidKeyError

def insecure_verify(token):
    # ruleid:unverified-jwt-decode
    decoded = jwt.decode(token, verify = False)
    print(decoded)
    return True

#{/fact}
