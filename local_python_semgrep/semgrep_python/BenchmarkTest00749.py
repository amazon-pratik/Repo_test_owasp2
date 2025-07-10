#{fact rule=cross-site-scripting@v1.0 defects=0}

import os
import flask
import hashlib

app = flask.Flask(__name__)

@app.route("/ok")
def ok():
    # ok: raw-html-format
    return "<a href='https://example.com'>Click me!</a>"

#{/fact}
