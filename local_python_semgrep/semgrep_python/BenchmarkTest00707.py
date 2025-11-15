#{fact rule=os-command-injection@v1.0 defects=1}

import os
import flask
import hashlib

app = flask.Flask(__name__)

# Real world example
@app.route('/', methods=['GET', 'POST'])
def index():
    if flask.request.method == 'GET':
        return flask.render_template('index.html')
    # check url first
    url = flask.request.form.get('url', None)
    if url != '':
        md5 = hashlib.md5(url+app.config['MD5_SALT']).hexdigest()
        fpath = join(join(app.config['MEDIA_ROOT'], 'upload'), md5+'.jpg')
        # ruleid: os-system-injection
        r = os.system('wget %s -O "%s"'%(url, fpath))
        if r != 0: abort(403)
        return flask.redirect(flask.url_for('landmark', hash=md5))

#{/fact}
