#{fact rule=no-auth-over-http@v1.0 defects=0}

import requests
def test3():
    # ok:no-auth-over-http
    good_url = "https://www.github.com"
    r = requests.get(good_url, auth=('user', 'pass'))

#{/fact}
