#{fact rule=cross-site-scripting@v1.0 defects=0}

from django.utils.safestring import mark_safe
from django.utils.html import format_html
from django.http import HttpResponse
from django.template import loader



def fine(request):
    template = loader.get_template('contents.html')
    # ok:avoid-mark-safe
    fine = mark_safe(
        """
        <div>
            <p>Contents!</p>
        </div>
        """
    )
    return HttpResponse(template.render({"html_example": fine}, request))

#{/fact}
