#{fact rule=code-injection@v1.0 defects=0}

import flask

app = flask.Flask(__name__)

@app.route("/index")
def index():
    # ok: render-template-string
    return flask.render_template("index.html"), 200

#{/fact}
