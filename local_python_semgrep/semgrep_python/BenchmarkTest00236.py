#{fact rule=cross-site-scripting@v1.0 defects=0}

from django.utils.safestring import mark_safe
from django.utils.html import format_html
from django.http import HttpResponse
from django.template import loader

def not_really_safe(request):
    template = loader.get_template('contents.html')
    # ok:avoid-mark-safe
    this_is_ok = format_html(
        """
        <div>
            <p>Contents! {}</p>
        </div>
        """,
        request.POST.get("contents")
    )
    return HttpResponse(template.render({"html_example": this_is_ok}, request))

#{/fact}
