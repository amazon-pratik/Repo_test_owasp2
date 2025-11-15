#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import urlretrieve


def test1_ok():
    # ok: insecure-urlretrieve
    urlretrieve("https://example.com")

#{/fact}
