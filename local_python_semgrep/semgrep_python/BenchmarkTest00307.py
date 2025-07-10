#{fact rule=cross-site-scripting@v1.0 defects=1}

import urllib
from django.db.models import Q
from django.auth import User
from django.http import HttpResponse, HttpResponseBadRequest
from django.utils.translation import ugettext as _

from org import engines, manageNoEngine, genericApiException

def search_certificates(request):
   
    user = User.objects.get(Q(email=user_filter) | Q(username=user_filter))
    if user.DoesNotExist:
        # ruleid:direct-use-of-httpresponse
        return HttpResponseBadRequest(_("user '{user}' does not exist").format(user_filter))

#{/fact}
