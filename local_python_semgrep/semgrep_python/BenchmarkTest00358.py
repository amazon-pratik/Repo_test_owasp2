#{fact rule=detect-activated-debug-feature@v1.0 defects=1}

import os
import flask
app = flask.Flask(__name__)

# ruleid: avoid_hardcoded_config_TESTING
app.config["TESTING"] = True

#{/fact}
