#{fact rule=code-injection@v1.0 defects=0}



def okTest2(data):
    # ok: dangerous-globals-use
    list_of_globals = globals()
    list_of_globals["foobar"].update(data)


#{/fact}
