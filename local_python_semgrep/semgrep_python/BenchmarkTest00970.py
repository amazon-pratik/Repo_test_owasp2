#{fact rule=no-auth-over-http@v1.0 defects=1}

import requests

def from_import_test1(url):
    from requests import get, post
    # ruleid:no-auth-over-http
    good_url = "https://www.github.com"
    bad_url = "http://www.github.com"
    r = get(good_url, timeout=3)
    r = post(bad_url)

#{/fact}
