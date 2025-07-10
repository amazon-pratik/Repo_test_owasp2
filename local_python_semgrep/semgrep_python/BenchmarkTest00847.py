#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener


def test2_ok():
    od = URLopener()
    # ok: insecure-urlopener-retrieve
    url = "https://example.com"
    od.retrieve(url)

#{/fact}
