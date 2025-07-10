#{fact rule=cross-site-scripting@v1.0 defects=0}

from flask import render_template, Markup, request
from markupsafe import Markup as mkup

from application import app


@app.route('/good')
def good_test():
    search_query = request.args.get('q')
    # ok: explicit-unescape-with-markup
    return render_template('/markup-unescape.html', query=Markup.escape(search_query))

#{/fact}
