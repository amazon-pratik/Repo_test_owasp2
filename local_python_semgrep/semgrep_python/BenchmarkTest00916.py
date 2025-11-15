#{fact rule=code-injection@v1.0 defects=0}

def handler(event, context):
    blah1 = "import requests; r = requests.get('https://example.com')"
    # ok:tainted-code-exec
    exec(blah1)

#{/fact}
