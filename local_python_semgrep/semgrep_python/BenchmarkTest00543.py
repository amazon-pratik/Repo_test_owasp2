#{fact rule=detect-activated-debug-feature@v1.0 defects=0}

import os
import flask
app = flask.Flask(__name__)


# ok: avoid_hardcoded_config_TESTING
app.config["TESTING"] = os.getenv("TESTING")

#{/fact}
