#{fact rule=sql-injection@v1.0 defects=0}

import psycopg2

def ok2(user_input):
    conn = psycopg2.connect("dbname=test user=postgres")
    cur = conn.cursor()
    query = "SELECT name FROM users WHERE age=" + "3"
    # ok: psycopg-sqli
    cur.execute(query)

#{/fact}
