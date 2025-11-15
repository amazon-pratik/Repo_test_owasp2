#{fact rule=insecure-connection@v1.0 defects=1}

import requests

def test3():
    url = "http://example.com"
    with requests.Session() as session:
        # ruleid: request-session-http-in-with-context
        session.post(url)

#{/fact}
