#{fact rule=cross-site-scripting@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)

# Real world example
@app.route('/models/<model>')
def load_model(model):
    # ruleid:raw-html-format
    htmlpage = '''
    <body style='margin : 0px; overflow: hidden;'>
        <scene-tag embedded arjs>
            <marker-tag id="memarker" type="pattern" url="../static/patterns/pattern-kanji_qr.patt" vidhandler>
                <entity model="obj: url(../static/models/{}.obj); mtl: url(../static/models/{}.mtl)"> </entity>
            </marker-tag>
        </scene-tag>
    </body>
    '''.format(model,model)
    return htmlpage

#{/fact}
