#{fact rule=detect-activated-debug-feature@v1.0 defects=0}

# ok:hardcoded-password-default-argument
password = "this-is-probably-a-test"

def say_something(something):
    print(something)


#{/fact}
