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


# ok:filter-with-is-safe
@register.filter(is_safe=False)
def intword(value):
    """
    Convert a large integer to a friendly text representation. Works best
    for numbers over 1 million. For example, 1000000 becomes '1.0 million',
    1200000 becomes '1.2 million' and '1200000000' becomes '1.2 billion'.
    """
    try:
        value = int(value)
    except (TypeError, ValueError):
        return value

    abs_value = abs(value)
    if abs_value < 1000000:
        return value

    for exponent, converter in intword_converters:
        large_number = 10 ** exponent
        if abs_value < large_number * 1000:
            new_value = value / large_number
            rounded_value = round_away_from_one(new_value)
            return converter(abs(rounded_value)) % {
                'value': defaultfilters.floatformat(new_value, 1),
            }
    return value

#{/fact}
