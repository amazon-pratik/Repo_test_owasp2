#{fact rule=no-auth-over-http@v1.0 defects=1}

import requests

def test1():
    # ruleid:no-auth-over-http
    bad_url = "http://www.github.com"
    print("something")
    # ruleid:no-auth-over-http
    r = requests.get(bad_url, auth=('user', 'pass'))

#{/fact}
