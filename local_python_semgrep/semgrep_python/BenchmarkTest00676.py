#{fact rule=insecure-cookie@v1.0 defects=1}

def test1():
    import flask
    response = flask.make_response()
    # ruleid:secure-set-cookie
    response.set_cookie("cookie_name", "cookie_value")
    return response

#{/fact}
