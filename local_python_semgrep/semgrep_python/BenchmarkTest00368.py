#{fact rule=cross-site-scripting@v1.0 defects=0}

from django.template import Context, Template
from django.test import SimpleTestCase
from django.utils import html
from django.utils.functional import lazy, lazystr
from django.utils.safestring import SafeData, mark_safe


class someotherclass(str):
    # ok: html-magic-method
    def __init__(self):
        print('hello')

#{/fact}
