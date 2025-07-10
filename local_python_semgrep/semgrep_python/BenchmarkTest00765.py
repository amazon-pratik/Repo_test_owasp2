#{fact rule=insecure-connection@v1.0 defects=0}

import requests

# ok: request-with-http
def test3_ok(url = "https://example.com"):
    requests.delete(url)


#{/fact}
