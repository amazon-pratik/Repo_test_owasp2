#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import OpenerDirector

def test1():
    od = OpenerDirector()
    # ruleid: insecure-openerdirector-open-ftp
    od.open("ftp://example.com")

#{/fact}
