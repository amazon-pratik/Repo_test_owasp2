#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent
def fmt_unsafe(request):
    # ruleid: user-eval-format-string
    message = request.POST.get('message')
    print("do stuff here")
    code = """
    print({})
    """.format(message)
    eval(code)


#{/fact}
