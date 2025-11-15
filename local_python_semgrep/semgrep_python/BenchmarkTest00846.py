#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener

def test6_ok(url = "ftps://example.com"):
    od = URLopener()
    # ok: insecure-urlopener-retrieve-ftp
    od.retrieve(url)

#{/fact}
