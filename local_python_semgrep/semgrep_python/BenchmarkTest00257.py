#{fact rule=cross-site-scripting@v1.0 defects=0}

import base64
import mimetypes
import os

from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt

# adapted from https://github.com/mpirnat/lets-be-bad-guys/blob/7cbf11014bfc6dc9e199dc0b8a64e4597bc2338f/badguys/vulnerable/views.py#L95

def file_access(request):
    msg = request.GET.get('msg', '')
    # ok: context-autoescape-off
    return render(request, 'vulnerable/injection/file_access.html',
            {'msg': msg})


#{/fact}
