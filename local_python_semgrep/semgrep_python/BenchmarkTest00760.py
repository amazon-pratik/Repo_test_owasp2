#{fact rule=insecure-connection@v1.0 defects=1}

import requests


# ruleid: request-session-with-http
def test3(url = "http://example.com"):
    session = requests.Session()
    session.delete(url)

#{/fact}
