#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent

def fstr_unsafe_inline(request):
    # todoruleid: user-eval-format-string
    eval(f"print({request.GET.get('message')})")

#{/fact}
