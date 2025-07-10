#{fact rule=cross-site-scripting@v1.0 defects=0}

import os

def ok(request):
    # ok: command-injection-os-system
    url = request.GET['url']
    os.system("echo 'hello'")

#{/fact}
