#{fact rule=cross-site-scripting@v1.0 defects=1}

from flask import make_response, request

def test1():
    # ruleid: response-contains-unsanitized-input
    x = request.args.get("x")
    return make_response("found {}".format(x))


#{/fact}
