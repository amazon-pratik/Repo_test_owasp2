#{fact rule=hardcoded-credentials@v1.0 defects=1}


# ruleid:hardcoded-password-default-argument
def whoops(password="this-could-be-bad"):
    print(password)


#{/fact}
