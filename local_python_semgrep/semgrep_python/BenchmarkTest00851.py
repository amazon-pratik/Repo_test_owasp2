#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener


def test4_ok():
    # ok: insecure-urlopener-retrieve
    url = "https://example.com"
    URLopener().retrieve(url)


#{/fact}
