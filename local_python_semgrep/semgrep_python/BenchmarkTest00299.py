#{fact rule=code-injection@v1.0 defects=1}

import flask

app = flask.Flask(__name__)

@app.route("/error4")
def error4(e):
    # ruleid: dangerous-template-string
    template = """
{  extends "layout.html"  }
{  block body  }
    <div class="center-content error">
        <h1>Oops! That page doesn't exist.</h1>
        <h3>
"""
    template += request.url
    template += """
</h3>
</div>
{  endblock  }
"""
    rendered = flask.render_template_string(template)

#{/fact}
