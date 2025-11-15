#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener


def test2():
    od = URLopener()
    # ruleid: insecure-urlopener-retrieve
    url = "http://example.com"
    # ruleid: insecure-urlopener-retrieve
    od.retrieve(url)

#{/fact}
