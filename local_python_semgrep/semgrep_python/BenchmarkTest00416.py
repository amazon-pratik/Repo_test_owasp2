#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlopen

def test1():
    # ruleid: insecure-urlopen
    urlopen("http://example.com")

#{/fact}
