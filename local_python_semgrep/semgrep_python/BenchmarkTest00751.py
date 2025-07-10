#{fact rule=cross-site-scripting@v1.0 defects=1}

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

    def get4(self, request, *args, **kwds):
        context = self.get_context_data()

        text = request.GET['text']
        text = text.replace('"', '')

        # ruleid: raw-html-format
        context['html'] = '<a href="http://external/abc/%s">Check link href</a>'.format(text)

        return render(request, self.template_name, context)

#{/fact}
