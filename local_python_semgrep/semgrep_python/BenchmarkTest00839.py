#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener

def test3():
    # ruleid: insecure-urlopener-retrieve-ftp
    URLopener().retrieve("ftp://example.com")

#{/fact}
