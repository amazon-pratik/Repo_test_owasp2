#{fact rule=insecure-connection@v1.0 defects=0}

import requests

# ok: request-session-with-http
def test4_ok(url = "https://example.com"):
    session = requests.Session()
    session.request("HEAD", url, timeout=30)

#{/fact}
