#{fact rule=code-injection@v1.0 defects=0}

# ok:eval-detected
eval("x = 1; x = x + 2")


#{/fact}
