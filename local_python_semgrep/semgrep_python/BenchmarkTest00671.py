#{fact rule=insecure-connection@v1.0 defects=0}

import requests

def test1_ok():
    # ok: request-with-http
    requests.get("https://example.com")

#{/fact}
