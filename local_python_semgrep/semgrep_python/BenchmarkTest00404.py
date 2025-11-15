#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import OpenerDirector

def test1_ok():
    od = OpenerDirector()
    # ok: insecure-openerdirector-open
    od.open("https://example.com")


#{/fact}
