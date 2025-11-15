#{fact rule=sql-injection@v1.0 defects=0}

import pg8000.native as pg
import pg8000.dbapi


def ok3(user_input):
    conn = pg8000.connect(user='postgres', password='password', database='andromedabot')
    query = "SELECT name FROM users WHERE age="
    query += "3"
    # ok: pg8000-sqli
    conn.execute(query)

#{/fact}
