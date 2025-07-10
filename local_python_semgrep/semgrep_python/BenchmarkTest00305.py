#{fact rule=detect-activated-debug-feature@v1.0 defects=1}

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return flask.jsonify({"response": "ok"})

if __name__ == "__main__":
    # ruleid:debug-enabled
    app.run("0.0.0.0", debug=True)

#{/fact}
