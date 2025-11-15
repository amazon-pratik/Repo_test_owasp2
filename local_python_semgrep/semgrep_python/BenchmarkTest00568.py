#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import OpenerDirector

def test6(url = "ftp://example.com"):
    od = OpenerDirector()
    # ruleid: insecure-openerdirector-open-ftp
    od.open(url)


#{/fact}
