#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener

def test3_ok():
    # ok: insecure-urlopener-retrieve-ftp
    URLopener().retrieve("ftps://example.com")

#{/fact}
