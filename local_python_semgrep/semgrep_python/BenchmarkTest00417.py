#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import urlopen

def test1_ok():
    # ok: insecure-urlopen
    urlopen("https://example.com")

#{/fact}
