#{fact rule=detect-activated-debug-feature@v1.0 defects=0}

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return flask.jsonify({"response": "ok"})

def main():
    # ok:debug-enabled
    app.run()


#{/fact}
