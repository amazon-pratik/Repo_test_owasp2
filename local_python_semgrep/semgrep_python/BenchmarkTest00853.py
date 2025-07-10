#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener

def test5_ok(url = "https://example.com"):
    # ok: insecure-urlopener-retrieve
    URLopener().retrieve(url)

#{/fact}
