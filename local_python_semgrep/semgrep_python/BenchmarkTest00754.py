#{fact rule=cross-site-scripting@v1.0 defects=0}

from django.shortcuts import render
from django.shortcuts import render_to_response
from django.utils.html import escape

class FalsePositiveCheck499View(VulnerableTemplateView):
    title = '(almost) Cross-Site Scripting'
    tags = ['false-positive', 'GET', 'filtered']
    description = 'Echo query string parameter to HTML tag attribute removing'\
                  ' the single quotes which are present in the input.'
    url_path = '499_check.py?text=1'
    false_positive_check = True
    references = ['https://github.com/andresriancho/w3af/pull/499']

    def ok4(self, request):
        form = CreateQuestionForm(request.POST)
        if '_popup' in request.GET and not error:
            # ok: raw-html-format
            resp = '<script type="text/javascript">opener.dismissAddAnotherPopupDojo(window, "%s", "%s");</script>' \
                % (escape(form.cleaned_data['something']), escape(form.cleaned_data['text']))
            resp += '<script type="text/javascript">window.close();</script>'
            return HttpResponse(resp)

#{/fact}
