#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlretrieve

def test1():
    # ruleid: insecure-urlretrieve
    urlretrieve("http://example.com")

#{/fact}
