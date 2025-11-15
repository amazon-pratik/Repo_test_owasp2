#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import OpenerDirector

def test2_ok():
    od = OpenerDirector()
    # ok: insecure-openerdirector-open
    url = "https://example.com"
    od.open(url)


#{/fact}
