#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import URLopener

def test4():
    # ruleid: insecure-urlopener-open
    url = "http://example.com"
    # ruleid: insecure-urlopener-open
    URLopener().open(url)

#{/fact}
