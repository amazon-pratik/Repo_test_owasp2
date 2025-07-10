#{fact rule=detect-activated-debug-feature@v1.0 defects=0}


# ok:hardcoded-password-default-argument
def say_something_else(something_else="something else"):
    print(something_else)


#{/fact}
