#{fact rule=code-injection@v1.0 defects=1}

def handler(event, context):
   
    dynamic1 = "import requests; r = requests.get('{}')"
    # ruleid:tainted-code-exec
    exec(dynamic1.format(event['url']))

#{/fact}
