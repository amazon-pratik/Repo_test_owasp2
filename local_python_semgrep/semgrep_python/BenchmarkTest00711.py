#{fact rule=path-traversal@v1.0 defects=0}

import logging
import subprocess


def post4(request, format=None):
    # ok: path-traversal-file-name
    filename = request.GET.get('filename')
    host = request.data['host']
    commands = "find %s -name ." % (filename)
    result = subprocess.check_output(commands)
    logging.info("{} ran command: {}".format(host, commands))

#{/fact}
