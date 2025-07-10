#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent

def fmt_unsafe_dict(request):
    # ruleid: user-eval-format-string
    eval("print({}, {})".format(request.POST['message'], "pwned"))


#{/fact}
