#{fact rule=insecure-connection@v1.0 defects=0}

import requests


def test1_ok():
    session = requests.Session()
    # ok: request-session-with-http
    session.get("https://example.com")

#{/fact}
