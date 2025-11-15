#{fact rule=insecure-connection@v1.0 defects=0}

import requests


# ok: request-with-http
def test4_ok(url = "https://example.com"):
    requests.request("HEAD", url, timeout=30)

#{/fact}
