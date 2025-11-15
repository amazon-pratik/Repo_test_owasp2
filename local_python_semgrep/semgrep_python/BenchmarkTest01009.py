#{fact rule=server-side-request-forgery@v1.0 defects=1}

import flask
import requests

app = flask.Flask(__name__)


@app.route("/get_param_inline_concat", methods=["GET"])
def get_param_inline_concat():
    # ruleid: ssrf-requests
    requests.get(flask.request.args.get("param") + "/id")

#{/fact}
