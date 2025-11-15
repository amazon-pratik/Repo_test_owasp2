#{fact rule=cross-site-scripting@v1.0 defects=1}


def eval_something(something):
    # ruleid:eval-detected
    eval(something)

#{/fact}
