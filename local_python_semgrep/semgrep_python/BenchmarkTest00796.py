#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlretrieve

def test2():
    # ruleid: insecure-urlretrieve-ftp
    url = "ftp://example.com"
    # ruleid: insecure-urlretrieve-ftp
    urlretrieve(url)

#{/fact}
