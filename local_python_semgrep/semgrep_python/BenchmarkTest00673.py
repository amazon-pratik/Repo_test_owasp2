#{fact rule=insecure-cookie@v1.0 defects=0}

from django.shortcuts import render

from django.conf import settings
from django.contrib.messages.storage.base import BaseStorage, Message

class CookieStorage(BaseStorage):
    def _update_cookie(self, encoded_data, response):
        """
        Either sets the cookie with the encoded data if there is any data to
        store, or deletes the cookie.
        """
        if encoded_data:
            # ok: django-secure-set-cookie
            response.set_cookie(
                self.cookie_name, encoded_data,
                domain=settings.SESSION_COOKIE_DOMAIN,
                secure=settings.SESSION_COOKIE_SECURE or None,
                httponly=settings.SESSION_COOKIE_HTTPONLY or None,
            )
        else:
            response.delete_cookie(self.cookie_name, domain=settings.SESSION_COOKIE_DOMAIN)


#{/fact}
