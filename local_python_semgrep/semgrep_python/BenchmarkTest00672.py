#{fact rule=insecure-connection@v1.0 defects=1}

import requests

def test2():
    # ruleid: request-with-http
    url = "http://example.com"
    # ruleid: request-with-http
    requests.post(url)

#{/fact}
