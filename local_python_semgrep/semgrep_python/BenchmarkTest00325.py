#{fact rule=code-injection@v1.0 defects=0}



blah = "import requests; r = requests.get('https://example.com')"
# ok:eval-detected
eval(blah)


#{/fact}
