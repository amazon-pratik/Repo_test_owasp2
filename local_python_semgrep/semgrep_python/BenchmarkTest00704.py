#{fact rule=os-command-injection@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)

@app.route("/get_param_format", methods=["GET"])
def get_param_format():
    param = flask.request.args.get("param")
    # ruleid: os-system-injection
    os.system("echo {}".format(param))

#{/fact}
