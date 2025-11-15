#{fact rule=cross-site-scripting@v1.0 defects=0}

from flask import Flask, render_template
app = Flask(__name__)


@app.route("no_vars")
def no_vars():
    # ok: unescaped-template-extension
    return render_template("unsafe.txt")

#{/fact}
