#{fact rule=cross-site-scripting@v1.0 defects=0}

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/format-ok")
def format():
    name = "world"
    # ok: unescaped-template-extension
    return render_template("{}.html".format("hello"), name)

from library import render_template
def not_flask():
    from library import render_template
    # ok: unescaped-template-extension
    return render_template("hello.txt")

#{/fact}
