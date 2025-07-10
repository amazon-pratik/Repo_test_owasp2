#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent

def fstr_unsafe(request):
    # ruleid: user-eval-format-string
    message = request.POST.get('message')
    print("do stuff here")
    code = f"""
    print({message})
    """
    eval(code)

#{/fact}
