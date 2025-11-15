#{fact rule=insecure-connection@v1.0 defects=0}

import requests



def test2_ok():
    # ok: request-with-http
    url = "https://example.com"
    requests.post(url)

#{/fact}
