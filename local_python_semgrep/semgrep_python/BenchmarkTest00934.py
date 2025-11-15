#{fact rule=cross-site-scripting@v1.0 defects=1}

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/no_extension")
def no_extension():
    # ruleid: unescaped-template-extension
    return render_template("will-crash-without-extension", name=request.args.get("name"))

# Test a bunch at the same time
evil = "<script>alert('blah')</script>"

#{/fact}
