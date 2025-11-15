#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener

def test5(url = "ftp://example.com"):
    # ruleid: insecure-urlopener-retrieve-ftp
    URLopener().retrieve(url)

#{/fact}
