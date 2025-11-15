#{fact rule=insecure-connection@v1.0 defects=0}

from urllib.request import OpenerDirector

def test3_ok():
    # ok: insecure-openerdirector-open
    OpenerDirector().open("https://example.com")

#{/fact}
