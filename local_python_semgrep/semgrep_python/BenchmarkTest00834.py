#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener

def test5(url = "http://example.com"):
    # ruleid: insecure-urlopener-open
    URLopener().open(url)

#{/fact}
