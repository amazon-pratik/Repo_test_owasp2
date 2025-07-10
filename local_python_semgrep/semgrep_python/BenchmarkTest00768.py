#{fact rule=insecure-connection@v1.0 defects=0}

from django.shortcuts import render

from django.conf import settings
from django.contrib.messages.storage.base import BaseStorage, Message


def index(request, template):
    response = render(request, template)

    # ok: django-secure-set-cookie
    response.set_cookie(
        settings.SESSION_COOKIE_NAME,
        request.session.session_key, max_age=max_age,
        expires=expires, domain=settings.SESSION_COOKIE_DOMAIN,
        path=settings.SESSION_COOKIE_PATH,
        secure=settings.SESSION_COOKIE_SECURE or None,
        httponly=settings.SESSION_COOKIE_HTTPONLY or None,
    )

    return response

#{/fact}
