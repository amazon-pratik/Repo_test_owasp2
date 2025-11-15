#{fact rule=cross-site-scripting@v1.0 defects=1}

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/unsafe")
def unsafe():
    # ruleid: unescaped-template-extension
    return render_template("unsafe.txt", name=request.args.get("name"))

#{/fact}
