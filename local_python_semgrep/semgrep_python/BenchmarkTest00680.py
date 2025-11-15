#{fact rule=insecure-cookie@v1.0 defects=0}

from flask import send_file

app = Flask(__name__)

def download_not_flask_route(filename):
  # ok:avoid_send_file_without_path_sanitization
  return send_file(filename)

#{/fact}
