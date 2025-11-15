#{fact rule=cross-site-scripting@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)

@app.route("/get_param_inline", methods=["GET"])
def get_param_inline():
    # ruleid:raw-html-format
    return "<a href='%s'>Click me!</a>" % flask.request.args.get("param")

#{/fact}
