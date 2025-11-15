#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import urlretrieve

# ok: insecure-urlretrieve-ftp
def test3_ok(url = "sftp://example.com"):
    urlretrieve(url)

#{/fact}
