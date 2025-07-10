#{fact rule=sql-injection@v1.0 defects=0}



# ok: sqlalchemy-sql-injection
def ok3(var):
    query = cls.query.group_by(
        var=3)

#{/fact}
