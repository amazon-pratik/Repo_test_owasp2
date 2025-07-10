#{fact rule=insecure-cookie@v1.0 defects=0}


def test3():
    import flask
    response = flask.make_response()
    # all present
    # ok:secure-set-cookie
    response.set_cookie("cookie1", "cookie_value", secure=True, httponly=True, samesite='Lax')

#{/fact}
