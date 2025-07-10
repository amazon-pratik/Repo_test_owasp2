#{fact rule=code-injection@v1.0 defects=0}

def handler(event, context):
    # ok:tainted-code-exec
    eval("x = 1; x = x + 2")

#{/fact}
