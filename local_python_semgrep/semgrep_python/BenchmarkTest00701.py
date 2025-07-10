#{fact rule=os-command-injection@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)

@app.route("/get_param_inline_concat", methods=["GET"])
def get_param_inline_concat():
    # ruleid: os-system-injection
    os.system("echo " + flask.request.args.get("param"))

#{/fact}
