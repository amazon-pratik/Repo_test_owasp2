#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlretrieve

# ruleid: insecure-urlretrieve-ftp
def test3(url = "ftp://example.com"):
    urlretrieve(url)

#{/fact}
