#{fact rule=sql-injection@v1.0 defects=0}


# ok: sqlalchemy-sql-injection
def ok4(var):
    query = query.order_by(desc(Scan.started_at)).limit(limit)


#{/fact}
