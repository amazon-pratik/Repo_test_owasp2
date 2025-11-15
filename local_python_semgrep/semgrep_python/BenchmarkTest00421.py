#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener

def test1_ok():
    od = URLopener()
    # ok: insecure-urlopener-open-ftp
    od.open("ftps://example.com")

#{/fact}
