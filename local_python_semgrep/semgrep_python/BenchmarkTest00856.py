#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import urlretrieve


def test2_ok():
    # ok: insecure-urlretrieve-ftp
    url = "sftp://example.com"
    urlretrieve(url)

#{/fact}
