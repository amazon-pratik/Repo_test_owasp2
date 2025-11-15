#{fact rule=os-command-injection@v1.0 defects=1}

import os

def danger(request):
    # ruleid: command-injection-os-system
    url = request.GET['url']
    os.system('wget ' + url)

#{/fact}
