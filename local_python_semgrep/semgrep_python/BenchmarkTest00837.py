#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener

def test6_ok(url = "https://example.com"):
    od = URLopener()
    # ok: insecure-urlopener-open
    od.open(url)
#{/fact}
