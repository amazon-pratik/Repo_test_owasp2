#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import urlretrieve

# ok: insecure-urlretrieve
def test3_ok(url = "https://example.com"):
    urlretrieve(url)

#{/fact}
