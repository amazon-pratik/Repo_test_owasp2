#{fact rule=insecure-connection@v1.0 defects=1}

import requests

def test2():
    with requests.Session() as session:
        url = "http://example.com"
        # ruleid: request-session-http-in-with-context
        session.post(url)

#{/fact}
