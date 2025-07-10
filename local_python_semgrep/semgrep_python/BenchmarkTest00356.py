#{fact rule=code-injection@v1.0 defects=1}

import base64
import mimetypes
import os

from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.template import Template

# adapted from https://github.com/mpirnat/lets-be-bad-guys/blob/7cbf11014bfc6dc9e199dc0b8a64e4597bc2338f/badguys/vulnerable/views.py#L95


def bad3(request):
    # ruleid: globals-as-template-context
    response = Template.render(request, 'vulnerable/xss/form.html', globals())
    response.set_cookie(key='monster', value='omnomnomnomnom!')
    return response


#{/fact}
