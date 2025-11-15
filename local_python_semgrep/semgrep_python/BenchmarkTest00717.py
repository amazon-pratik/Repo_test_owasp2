# #{ex-fact rule=sql-injection@v1.0 defects=1}

# import pg8000.native as pg
# import pg8000.dbapi
#
#
# import pg8000.native as pg
# import pg8000.dbapi

# def bad5():
#     conn = pg8000.connect(user='postgres', password='password', database='andromedabot')
#     # ruleid: pg8000-sqli
#     conn.executemany("SELECT name FROM users WHERE age=" + req.FormValue("age"))

# #{/ex-fact}
