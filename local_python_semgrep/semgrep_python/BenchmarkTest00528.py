#{fact rule=cross-site-scripting@v1.0 defects=0}

# cf. https://github.com/django/django/blob/ecaac9e42f497be04ddc72dfebb6e397ccca9517/django/contrib/humanize/templatetags/humanize.py

import re
from datetime import date, datetime
from decimal import Decimal

from django import template
from django.template import defaultfilters
from django.utils.formats import number_format
from django.utils.safestring import mark_safe
from django.utils.timezone import is_aware, utc
from django.utils.translation import (
    gettext as _, gettext_lazy, ngettext, ngettext_lazy, npgettext_lazy,
    pgettext, round_away_from_one,
)

register = template.Library()


# This filter doesn't require expects_localtime=True because it deals properly
# with both naive and aware datetimes. Therefore avoid the cost of conversion.
# ok:filter-with-is-safe
@register.filter
def naturaltime(value):
    """
    For date and time values show how many seconds, minutes, or hours ago
    compared to current timestamp return representing string.
    """
    return NaturalTimeFormatter.string_for(value)


#{/fact}
