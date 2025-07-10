#{fact rule=cross-site-scripting@v1.0 defects=0}

from flask import make_response, request

def test2():
    # ok: response-contains-unsanitized-input
    x = request.args.get("x")
    y = some_safe_operation_on(x)
    return make_response("found {}".format(y))

#{/fact}
