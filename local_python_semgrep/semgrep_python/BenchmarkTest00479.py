#{fact rule=code-injection@v1.0 defects=0}


def okTest3(data):
    # ok: dangerous-globals-use
    NS = globals()
    NS['_foobar_' + data] = smth(data)

#{/fact}
