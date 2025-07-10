#{fact rule=server-side-request-forgery@v1.0 defects=1}

import flask
import requests

app = flask.Flask(__name__)

@app.route("/route_param/<route_param>")
def route_param(route_param):
    print("blah")
    # ruleid: ssrf-requests
    return requests.get(route_param)


#{/fact}
