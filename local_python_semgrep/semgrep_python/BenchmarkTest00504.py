#{fact rule=cross-site-scripting@v1.0 defects=1}

# -*- coding: utf-8 -*-
import os
import sqlite3

from flask import Flask
from flask import redirect
from flask import request
from flask import session
from jinja2 import Template

app = Flask(__name__)


# cf. https://raw.githubusercontent.com/Deteriorator/Python-Flask-Web-Development/53be4c48ffbe7d30a1bde5717658f6de81820360/demo/http/app.py
@app.route('/hello')
def hello():
    name = request.args.get('name')
    if name is None:
        name = request.cookies.get('name', 'Human')
    respones = '<h1>Hello, %s</h1>' % name
    if 'logged_in' in session:
        respones += '[Authenticated]'
    else:
        respones += '[Not Authenticated]'
    # ruleid: directly-returned-format-string
    return respones

#{/fact}
