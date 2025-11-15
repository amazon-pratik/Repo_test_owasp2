#{fact rule=cross-site-scripting@v1.0 defects=1}

from flask import render_template, Markup, request
from markupsafe import Markup as mkup

from application import app

@app.route('/markupsafe')
def markupsafe_test():
    search_query = request.args.get('q')
    # ruleid: explicit-unescape-with-markup
    return render_template('/markup-unescape.html', query=mkup(search_query))

#{/fact}
