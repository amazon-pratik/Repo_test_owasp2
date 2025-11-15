#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlopen


def test2():
    # ruleid: insecure-urlopen-ftp
    url = "ftp://example.com"
    # ruleid: insecure-urlopen-ftp
    urlopen(url)

#{/fact}
