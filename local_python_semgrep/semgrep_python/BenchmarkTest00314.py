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

@app.route("/loginpage3")
def render_login_page3(thing):
    # ruleid:directly-returned-format-string
    return '''
<p>%s</p>
<form method="POST" style="margin: 60px auto; width: 140px;">
    <p><input name="username" type="text" /></p>
    <p><input name="password" type="password" /></p>
    <p><input value="Login" type="submit" /></p>
</form>
    ''' % (thing,)

#{/fact}
