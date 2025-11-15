#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import Request

def test1():
    # ruleid: insecure-request-object
    Request("http://example.com")

#{/fact}
