#{fact rule=cross-site-scripting@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)

@app.route("/route_param_percent_format/<route_param>")
def route_param_percent_format(route_param):
    print("blah")
    # ruleid:raw-html-format
    return "<a href='%s'>Click me!</a>" % route_param

#{/fact}
