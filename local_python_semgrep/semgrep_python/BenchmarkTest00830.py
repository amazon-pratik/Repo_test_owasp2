#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener

def test3():
    # ruleid: insecure-urlopener-open
    URLopener().open("http://example.com")

#{/fact}
