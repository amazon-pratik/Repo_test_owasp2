#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import OpenerDirector


def test2():
    od = OpenerDirector()
    # ruleid: insecure-openerdirector-open-ftp
    url = "ftp://example.com"
    # ruleid: insecure-openerdirector-open-ftp
    od.open(url)

#{/fact}
