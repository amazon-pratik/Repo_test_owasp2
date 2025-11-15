#{fact rule=insecure-connection@v1.0 defects=1}

import requests


# ruleid: request-with-http
def test3(url = "http://example.com"):
    requests.delete(url)

#{/fact}
