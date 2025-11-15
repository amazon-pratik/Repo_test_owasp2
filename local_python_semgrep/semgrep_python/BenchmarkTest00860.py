#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlretrieve

# ruleid: insecure-urlretrieve
def test3(url = "http://example.com"):
    urlretrieve(url)

#{/fact}
