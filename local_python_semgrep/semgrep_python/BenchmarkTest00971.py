#{fact rule=no-auth-over-http@v1.0 defects=1}

import requests

def from_import_test1(url):
    from requests import get, post
    # ruleid:no-auth-over-http
    bad_url = "http://www.github.com"
    # ruleid:no-auth-over-http
    r = get(bad_url, timeout=3, auth=('user', 'pass'))

#{/fact}
