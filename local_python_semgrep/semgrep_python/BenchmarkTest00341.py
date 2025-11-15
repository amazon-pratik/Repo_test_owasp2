#{fact rule=cross-site-scripting@v1.0 defects=0}

import requests

class FOO(resource):
    method_decorators = decorator()

    # ok:flask-api-method-string-format
    def get(self, somearg):
        otherFunc("hello world")


#{/fact}
