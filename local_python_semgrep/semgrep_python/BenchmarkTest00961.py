#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent

def unsafe(request):
    # ruleid: user-exec-format-string
    message = request.POST.get('message')
    print("do stuff here")
    code = """
    print(%s)
    """ % message
    exec(code)

#{/fact}
