#{fact rule=cross-site-scripting@v1.0 defects=1}

from django.utils.html import (
    conditional_escape, escape, escapejs, format_html, html_safe, json_script,
    linebreaks, smart_urlquote, strip_spaces_between_tags, strip_tags, urlize,
)
from django.utils.safestring import mark_safe


class Boring:
    def __str__(self):
    # ruleid: html-safe
        HtmlBoring = html_safe(Boring)

#{/fact}
