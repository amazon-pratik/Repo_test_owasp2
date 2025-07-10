#{fact rule=insecure-cookie@v1.0 defects=1}

from django.shortcuts import render

from django.conf import settings
from django.contrib.messages.storage.base import BaseStorage, Message


def index(request, template):
    response = render(request, template)
    # ruleid: django-secure-set-cookie
    response.set_cookie("hello", "again", httponly=False)

    return response

#{/fact}
