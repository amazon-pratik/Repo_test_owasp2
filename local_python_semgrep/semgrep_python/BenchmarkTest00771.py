#{fact rule=insecure-cookie@v1.0 defects=0}


# ok:secure-set-cookie
def set_cookie(settings):
    d = {"hello": "world"}
    d.update(settings)
    return d


#{/fact}
