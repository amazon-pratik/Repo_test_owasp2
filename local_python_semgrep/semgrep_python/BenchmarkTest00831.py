#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import URLopener

def test3_ok():
    # ok: insecure-urlopener-open
    URLopener().open("https://example.com")

#{/fact}
