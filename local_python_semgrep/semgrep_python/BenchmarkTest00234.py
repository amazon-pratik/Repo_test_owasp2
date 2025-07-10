#{fact rule=cross-site-scripting@v1.0 defects=1}

from django.utils.safestring import mark_safe
from django.utils.html import format_html
from django.http import HttpResponse
from django.template import loader

def not_really_safe(request):
    template = loader.get_template('contents.html')
    # ruleid:avoid-mark-safe
    not_actually_safe = mark_safe(
        """
        <div>
            <p>Contents! %s</p>
        </div>
        """ % request.POST.get("contents")
    )
    return HttpResponse(template.render({"html_example": not_actually_safe}, request))


#{/fact}
