#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener

def test2_ok():
    od = URLopener()
    # ok: insecure-urlopener-open
    url = "https://example.com"
    od.open(url)


#{/fact}
