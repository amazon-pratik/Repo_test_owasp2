#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent

def unsafe_dict(request):
    # ruleid: user-exec-format-string
    exec("print(%s)" % request.POST['message'])


#{/fact}
