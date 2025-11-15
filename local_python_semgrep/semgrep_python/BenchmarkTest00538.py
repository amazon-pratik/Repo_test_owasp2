#{fact rule=hardcoded-credentials@v1.0 defects=1}

import os
import flask
app = flask.Flask(__name__)


# ruleid: avoid_hardcoded_config_SECRET_KEY
app.config.update(SECRET_KEY="aaaa")

#{/fact}
