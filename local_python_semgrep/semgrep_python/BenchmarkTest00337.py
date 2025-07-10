#{fact rule=cross-site-scripting@v1.0 defects=1}

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

# ruleid:filter-with-is-safe
@register.filter(is_safe=True)
def intcomma(value, use_l10n=True):
    """
    Convert an integer to a string containing commas every three digits.
    For example, 3000 becomes '3,000' and 45000 becomes '45,000'.
    """
    if use_l10n:
        try:
            if not isinstance(value, (float, Decimal)):
                value = int(value)
        except (TypeError, ValueError):
            return intcomma(value, False)
        else:
            return number_format(value, use_l10n=True, force_grouping=True)
    orig = str(value)
    new = re.sub(r"^(-?\d+)(\d{3})", r'\g<1>,\g<2>', orig)
    if orig == new:
        return new
    else:
        return intcomma(new, use_l10n)


# A tuple of standard large number to their converters
intword_converters = (
    (6, lambda number: ngettext('%(value)s million', '%(value)s million', number)),
    (9, lambda number: ngettext('%(value)s billion', '%(value)s billion', number)),
    (12, lambda number: ngettext('%(value)s trillion', '%(value)s trillion', number)),
    (15, lambda number: ngettext('%(value)s quadrillion', '%(value)s quadrillion', number)),
    (18, lambda number: ngettext('%(value)s quintillion', '%(value)s quintillion', number)),
    (21, lambda number: ngettext('%(value)s sextillion', '%(value)s sextillion', number)),
    (24, lambda number: ngettext('%(value)s septillion', '%(value)s septillion', number)),
    (27, lambda number: ngettext('%(value)s octillion', '%(value)s octillion', number)),
    (30, lambda number: ngettext('%(value)s nonillion', '%(value)s nonillion', number)),
    (33, lambda number: ngettext('%(value)s decillion', '%(value)s decillion', number)),
    (100, lambda number: ngettext('%(value)s googol', '%(value)s googol', number)),
)

#{/fact}
