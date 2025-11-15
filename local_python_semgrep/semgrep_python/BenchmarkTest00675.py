#{fact rule=insecure-cookie@v1.0 defects=0}

from django.shortcuts import render

from django.conf import settings
from django.contrib.messages.storage.base import BaseStorage, Message


def index(request, template):
    response = render(request, template)

    # ok: django-secure-set-cookie
    response.set_cookie("hello", "world", **kwargs)

    return response

#{/fact}
