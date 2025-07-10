#{fact rule=insecure-connection@v1.0 defects=1}

import requests

def test1():
    with requests.Session() as session:
        # ruleid: request-session-http-in-with-context
        session.get("http://example.com")

#{/fact}
