#{fact rule=code-injection@v1.0 defects=0}

def handler(event, context):
   
    blah2 = "import requests; r = requests.get('https://example.com')"
    # ok:tainted-code-exec
    eval(blah2)

#{/fact}
