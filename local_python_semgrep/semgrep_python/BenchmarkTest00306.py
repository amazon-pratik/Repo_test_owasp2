#{fact rule=cross-site-scripting@v1.0 defects=0}

import urllib
from django.db.models import Q
from django.auth import User
from django.http import HttpResponse, HttpResponseBadRequest
from django.utils.translation import ugettext as _

from org import engines, manageNoEngine, genericApiException

def search_certificates(request):
    user_filter = request.GET.get("user", "")
    if not user_filter:
        # ok:direct-use-of-httpresponse
        return HttpResponseBadRequest("user was not given")



#{/fact}
