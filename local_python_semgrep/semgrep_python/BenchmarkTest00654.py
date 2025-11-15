#{fact rule=cross-site-scripting@v1.0 defects=1}

import urllib
from django.db.models import Q
from django.auth import User
from django.http import HttpResponse, HttpResponseBadRequest
from django.utils.translation import ugettext as _

from org import engines, manageNoEngine, genericApiException

def inline_test(request):
    # ruleid: reflected-data-httpresponse
    return HttpResponse("Received {}".format(request.POST.get('message')))

#{/fact}
