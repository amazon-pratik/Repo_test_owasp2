#{fact rule=sql-injection@v1.0 defects=0}

import psycopg2

def ok1(user_input):
    conn = psycopg2.connect("dbname=test user=postgres")
    cur = conn.cursor()
    SQL = "INSERT INTO authors (name) VALUES (%s);"
    # ok: psycopg-sqli
    cur.execute(SQL, user_input)

#{/fact}
