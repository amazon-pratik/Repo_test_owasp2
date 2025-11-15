#{fact rule=cross-site-scripting@v1.0 defects=1}

from flask import Flask, render_template
app = Flask(__name__)


@app.route("/really_unsafe")
def really_unsafe():
    name = request.args.get("name")
    age = request.args.get("age")
    # ruleid: unescaped-template-extension
    return render_template("unsafe.txt", name=name, age=age)

#{/fact}
