#{fact rule=insecure-connection@v1.0 defects=1}

import requests

def test2():
    session = requests.Session()
    # ruleid: request-session-with-http
    url = "http://example.com"
    # ruleid: request-session-with-http
    session.post(url)

#{/fact}
