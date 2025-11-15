#{fact rule=insecure-connection@v1.0 defects=0}

import requests

def test2_ok():
    session = requests.Session()
    # ok: request-session-with-http
    url = "https://example.com"
    session.post(url)

#{/fact}
