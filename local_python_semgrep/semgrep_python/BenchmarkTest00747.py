#{fact rule=cross-site-scripting@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)


@app.route("/post_param_branch", methods=["POST"])
def post_param_branch():
    param = flask.request.form['param']
    if True:
        # ruleid:raw-html-format
        return "<a href='%s'>Click me!</a>" % param

#{/fact}
