#{fact rule=cross-site-scripting@v1.0 defects=0}

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/escaped_extensions")
def escaped_extensions():
    # ok: unescaped-template-extension
    return render_template("safe.html", name=request.args.get("name"))

#{/fact}
