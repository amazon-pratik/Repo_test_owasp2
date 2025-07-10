#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent
def unsafe_inline(request):
    # ruleid: user-eval-format-string
    eval("print(%s)" % request.GET.get('message'))

#{/fact}
