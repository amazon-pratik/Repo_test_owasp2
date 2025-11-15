#{fact rule=cross-site-scripting@v1.0 defects=0}

# -*- coding: utf-8 -*-
import os
import sqlite3

from flask import Flask
from flask import redirect
from flask import request
from flask import session
from jinja2 import Template

app = Flask(__name__)

@app.route('/totally_not_bad')
def totally_not_bad():
    # ok
    return (
      "a" + "\n" +
      "b"
    )

if __name__ == '__main__':
    app.run(debug=True)

#{/fact}
