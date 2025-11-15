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


@app.route("/loginpage4")
def render_login_page4():
    thing = "blah"
    # the string below is now detected as a literal string after constant
    # propagation
    # ok:directly-returned-format-string
    return thing + '''
<form method="POST" style="margin: 60px auto; width: 140px;">
    <p><input name="username" type="text" /></p>
    <p><input name="password" type="password" /></p>
    <p><input value="Login" type="submit" /></p>
</form>
    '''


#{/fact}
