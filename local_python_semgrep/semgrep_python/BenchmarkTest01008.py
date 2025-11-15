#{fact rule=server-side-request-forgery@v1.0 defects=0}

import flask
import requests

app = flask.Flask(__name__)



@app.route("/get_param_ok", methods=["GET"])
def get_param_ok():
    param = flask.request.args.get("param")
    # ok: ssrf-requests
    requests.post("this is safe", timeout=10)

#{/fact}
