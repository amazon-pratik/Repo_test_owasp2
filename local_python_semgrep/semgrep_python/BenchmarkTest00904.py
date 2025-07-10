#{fact rule=server-side-request-forgery@v1.0 defects=0}

import flask
import requests

app = flask.Flask(__name__)



@app.route("/route_param_ok/<route_param>")
def route_param_ok(route_param):
    print("blah")
    # ok: ssrf-requests
    return requests.get("this is safe")

#{/fact}
