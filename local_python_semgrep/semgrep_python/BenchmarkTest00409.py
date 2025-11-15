#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import Request

def test2():
    # ruleid: insecure-request-object-ftp
    url = "ftp://example.com"
    # ruleid: insecure-request-object-ftp
    Request(url)

#{/fact}
