#{fact rule=insecure-connection@v1.0 defects=1}

import requests


# ruleid: request-with-http
def test4(url = "http://example.com"):
    requests.request("HEAD", url, timeout=30)

#{/fact}
