#{fact rule=ldap-authentication@v1.0 defects=1}

from django.contrib import auth
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import PermissionDenied, ValidationError
from django.utils.translation import gettext as _
from django.views.decorators.csrf import csrf_protect
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from ...conf import settings
from ...core.decorators import require_dict_data
from ...core.mail import mail_user
from ..bans import get_user_ban
from ..forms.auth import AuthenticationForm, ResendActivationForm, ResetPasswordForm
from ..serializers import AnonymousUserSerializer, AuthenticatedUserSerializer
from ..tokens import (
    is_password_change_token_valid,
    make_activation_token,
    make_password_change_token,
)
from .rest_permissions import UnbannedAnonOnly, UnbannedOnly

User = auth.get_user_model()
BaseUserManager = User.__class__


class UserManager(BaseUserManager):
    # ruleid: use-none-for-password-default
    def create_user(self, email, password=""):
        """
        Creates and saves a Poster with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

#{/fact}
