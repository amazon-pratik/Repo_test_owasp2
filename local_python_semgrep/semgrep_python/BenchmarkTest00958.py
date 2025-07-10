#{fact rule=code-injection@v1.0 defects=1}

from textwrap import dedent

def unsafe(request):
    # ruleid: user-eval
    code = request.POST.get('code')
    print("something")
    eval(code)

#{/fact}
