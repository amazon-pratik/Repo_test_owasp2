#{fact rule=insecure-connection@v1.0 defects=0}

import requests

def test3_ok():
    url = "https://example.com"
    with requests.Session() as session:
        # ok: request-session-http-in-with-context
        session.post(url)

#{/fact}
