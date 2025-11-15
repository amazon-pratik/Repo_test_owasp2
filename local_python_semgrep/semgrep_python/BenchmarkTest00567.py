#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import OpenerDirector


def test5(url = "ftp://example.com"):
    # ruleid: insecure-openerdirector-open-ftp
    OpenerDirector().open(url)

#{/fact}
