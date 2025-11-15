#{fact rule=os-command-injection@v1.0 defects=1}

import os


def danger3(request):
    # ruleid: command-injection-os-system
    url = request.GET['url']
    os.system("nslookup " + url)


#{/fact}
