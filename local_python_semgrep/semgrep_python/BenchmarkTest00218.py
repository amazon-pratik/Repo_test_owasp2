#{fact rule=code-injection@v1.0 defects=1}
from flask import Flask
app = Flask(__name__)
#ruleid:avoid_app_run_with_bad_host
app.run(host="0.0.0.0")


#{/fact}
