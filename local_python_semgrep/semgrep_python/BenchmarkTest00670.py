#{fact rule=insecure-connection@v1.0 defects=1}

import requests

def test1():
    # ruleid: request-with-http
    requests.get("http://example.com")

#{/fact}
