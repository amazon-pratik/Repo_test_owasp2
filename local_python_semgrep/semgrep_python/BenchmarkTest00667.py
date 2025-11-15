#{fact rule=insecure-connection@v1.0 defects=1}

import requests

def test1():
    session = requests.Session()
    # ruleid: request-session-with-http
    session.get("http://example.com")


#{/fact}
