#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import Request

def test1_ok():
    # ok: insecure-request-object-ftp
    Request("sftp://example.com")

#{/fact}
