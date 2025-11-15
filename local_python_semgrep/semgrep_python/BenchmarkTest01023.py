#{fact rule=code-injection@v1.0 defects=1}

def handler(event, context):
   
    dynamic2 = "import requests; r = requests.get('{}')"
    # ruleid:tainted-code-exec
    eval(dynamic2.format(event['url']))

#{/fact}
