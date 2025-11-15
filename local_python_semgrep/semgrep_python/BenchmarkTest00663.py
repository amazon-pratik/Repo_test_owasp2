#{fact rule=file-injection@v1.0 defects=0}

import time
from django.contrib.auth.models import User
from django.http import HttpResponse
from . import settings as USettings

def save_file(request):
    # ok: request-data-write
    user = User.objects.get(username=request.session.get('user'))
    content = "user logged in at {}".format(time.time())
    f = open("{}-{}".format(user, time.time()), 'wb')
    f.write(content)
    f.close()

#{/fact}
