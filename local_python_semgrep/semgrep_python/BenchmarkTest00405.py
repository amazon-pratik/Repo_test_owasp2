#{fact rule=insecure-connection@v1.0 defects=1}

from urllib.request import OpenerDirector

def test2():
    od = OpenerDirector()
    # ruleid: insecure-openerdirector-open
    url = "http://example.com"
    # ruleid: insecure-openerdirector-open
    od.open(url)


#{/fact}
