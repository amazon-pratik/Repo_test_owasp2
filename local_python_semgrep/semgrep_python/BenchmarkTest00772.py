#{fact rule=insecure-cookie@v1.0 defects=0}


def use_cookie(cookie):
    # ok:secure-set-cookie
    foo = set_cookie({"goodbye": "planet"})

#{/fact}
