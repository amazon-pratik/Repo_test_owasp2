#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener

def test1():
    od = URLopener()
    # ruleid: insecure-urlopener-retrieve
    od.retrieve("http://example.com")

#{/fact}
