#{fact rule=sql-injection@v1.0 defects=0}


def RawSQL(foo: str): pass
# OK
RawSQL("testing")

#{/fact}
