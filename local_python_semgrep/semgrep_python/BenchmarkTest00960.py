#{fact rule=code-injection@v1.0 defects=0}

from textwrap import dedent

def safe(request):
    # ok: user-eval
    code = """
    print('hello')
    """
    eval(dedent(code))

#{/fact}
