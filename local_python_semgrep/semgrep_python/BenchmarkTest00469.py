#{fact rule=cross-site-scripting@v1.0 defects=1}

import base64
import mimetypes
import os

from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt


def xss_query(request):
    # ruleid: context-autoescape-off
    return render(request, 'vulnerable/xss/query.html', {'qs': request.GET.get('qs', 'hello'), "autoescape":False})

#{/fact}
