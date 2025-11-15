#{fact rule=insecure-connection@v1.0 defects=0}

import requests

# ok: request-session-with-http
def test3_ok(url = "https://example.com"):
    session = requests.Session()
    session.delete(url)


#{/fact}
