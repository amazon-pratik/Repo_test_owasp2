#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlopen

def test2():
    # ruleid: insecure-urlopen
    url = "http://example.com"
    # ruleid: insecure-urlopen
    urlopen(url)


#{/fact}
