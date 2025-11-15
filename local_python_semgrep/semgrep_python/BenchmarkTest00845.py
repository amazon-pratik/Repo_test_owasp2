#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener

def test6(url = "ftp://example.com"):
    od = URLopener()
    # ruleid: insecure-urlopener-retrieve-ftp
    od.retrieve(url)

#{/fact}
