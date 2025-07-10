#{fact rule=os-command-injection@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)

@app.route("/subexpression_format", methods=["POST"])
def subexpression_format():
    param = "{}".format(flask.request.form['param'])
    print("do things")
    # ruleid: os-system-injection
    os.system("echo {}".format(param))

#{/fact}
