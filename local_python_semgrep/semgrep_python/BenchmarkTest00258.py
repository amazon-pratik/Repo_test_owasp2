#{fact rule=cross-site-scripting@v1.0 defects=1}

import base64
import mimetypes
import os

from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt



def xss_form(request):
    # ruleid: context-autoescape-off
    env = {'qs': request.GET.get('qs', 'hello'), 'autoescape': False}
    response = render(request, 'vulnerable/xss/form.html', env)
    response.set_cookie(key='monster', value='omnomnomnomnom!')
    return response


#{/fact}
