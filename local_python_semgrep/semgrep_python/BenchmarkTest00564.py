#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import OpenerDirector


def test3():
    # ruleid: insecure-openerdirector-open-ftp
    OpenerDirector().open("ftp://example.com")

#{/fact}
