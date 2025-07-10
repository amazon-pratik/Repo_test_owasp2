#{fact rule=os-command-injection@v1.0 defects=1}

import os


def danger2(request):
    # ruleid: command-injection-os-system
    image = request.POST['image']
    os.system("./face-recognize %s --N 24" % image)


#{/fact}
