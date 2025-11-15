#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import urlretrieve


def test2():
    # ruleid: insecure-urlretrieve
    url = "http://example.com"
    # ruleid: insecure-urlretrieve
    urlretrieve(url)

#{/fact}
