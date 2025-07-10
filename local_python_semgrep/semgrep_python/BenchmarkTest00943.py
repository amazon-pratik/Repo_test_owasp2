#{fact rule=ldap-authentication@v1.0 defects=0}

import os
import ujson
from typing import Any, Dict, List

from django.http import HttpRequest, HttpResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.test import Client
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from tests import example_user
from models import UserProfile
from backend import EmailAuthBackend

from somewhere import BaseBackend
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class ModelBackend(BaseBackend):
    """
    Authenticates against settings.AUTH_USER_MODEL.
    """

    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None:
            username = kwargs.get(UserModel.USERNAME_FIELD)
        if username is None or password is None:
            return
        try:
            user = UserModel._default_manager.get_by_natural_key(username)
        except UserModel.DoesNotExist:
            # Run the default password hasher once to reduce the timing
            # difference between an existing and a nonexistent user (#20760).
            # ok: unvalidated-password
            UserModel().set_password(password)
        else:
            if user.check_password(password) and self.user_can_authenticate(user):
                return user

#{/fact}
