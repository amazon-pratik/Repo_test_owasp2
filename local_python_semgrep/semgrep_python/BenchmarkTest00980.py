#{fact rule=code-injection@v1.0 defects=0}

from textwrap import dedent
def fstr_safe(request):
    var = "hello"
    # ok: user-eval-format-string
    code = f"""
    print('{var}')
    """
    eval(dedent(code))

#{/fact}
