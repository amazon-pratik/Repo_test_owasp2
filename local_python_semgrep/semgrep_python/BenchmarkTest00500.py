#{fact rule=cross-site-scripting@v1.0 defects=1}

import urllib
from django.db.models import Q
from django.auth import User
from django.http import HttpResponse, HttpResponseBadRequest
from django.utils.translation import ugettext as _

from org import engines, manageNoEngine, genericApiException


def vote(request, question_id):
    if request.method != "GET" and request.method != "POST":
        # ruleid:direct-use-of-httpresponse
        return HttpResponseBadRequest(
            "This view can not handle method {0}\n".format(request.method), status=405
        )

#{/fact}
