#{fact rule=insecure-cookie@v1.0 defects=1}


# cf. # https://github.com/pallets/flask/blob/b7f6fae9b34341b9be7742b86f6caffe07fc6f25/tests/test_basic.py#L1956
def test_real_code():
    import flask
    app = flask.Flask(__name__)
    @app.route("/")
    def index():
        r = flask.Response("", status=204)
        # ruleid: secure-set-cookie
        r.set_cookie("foo", "bar" * 100)
        return r

#{/fact}
