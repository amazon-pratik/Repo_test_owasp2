#{fact rule=server-side-request-forgery@v1.0 defects=1}

import flask
import requests

app = flask.Flask(__name__)


@app.route("/get_param", methods=["GET"])
def get_param():
    param = flask.request.args.get("param")
    # ruleid: ssrf-requests
    requests.post(param, timeout=10)

#{/fact}
