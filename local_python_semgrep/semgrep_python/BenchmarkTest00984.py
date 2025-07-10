#{fact rule=code-injection@v1.0 defects=0}

from textwrap import dedent

def fmt_safe(request):
    # ok: user-exec-format-string
    code = """
    print('hello')
    """
    exec(dedent(code))

#{/fact}
