#{fact rule=detect-activated-debug-feature@v1.0 defects=0}

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return flask.jsonify({"response": "ok"})


def env():
    # ok:debug-enabled
    app.run("0.0.0.0", debug=os.environ.get("DEBUG", False))


#{/fact}
