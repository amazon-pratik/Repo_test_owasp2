#{fact rule=insecure-connection@v1.0 defects=0}

import requests


def test1_ok():
    with requests.Session() as session:
        # ok: request-session-http-in-with-context
        session.get("https://example.com")

#{/fact}
