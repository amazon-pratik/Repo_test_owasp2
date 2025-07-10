#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent

def unsafe_inline(request):
    # ruleid: user-eval
    eval(request.GET.get('code'))


#{/fact}
