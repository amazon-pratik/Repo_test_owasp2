#{fact rule=insecure-connection@v1.0 defects=0}

from django.shortcuts import render

from django.conf import settings
from django.contrib.messages.storage.base import BaseStorage, Message


def index(request, template):
    response = render(request, template)
    # ok: django-secure-set-cookie
    response.set_cookie(
        settings.CSRF_COOKIE_NAME,
        request.META['CSRF_COOKIE'],
        max_age=settings.CSRF_COOKIE_AGE,
        domain=settings.CSRF_COOKIE_DOMAIN,
        path=settings.CSRF_COOKIE_PATH,
        secure=settings.CSRF_COOKIE_SECURE,
        httponly=settings.CSRF_COOKIE_HTTPONLY,
    )

    return response

#{/fact}
