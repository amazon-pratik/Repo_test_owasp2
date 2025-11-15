#{fact rule=cross-site-scripting@v1.0 defects=1}

import base64
import mimetypes
import os

from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt


def xss_path(request, path='default'):
    # ruleid: context-autoescape-off
    env = {'autoescape': False, 'path': path}
    return render(request, 'vulnerable/xss/path.html', env)


#{/fact}
