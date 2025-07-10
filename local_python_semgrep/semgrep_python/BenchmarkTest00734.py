#{fact rule=sql-injection@v1.0 defects=1}

import psycopg2

def bad6(user_input):
    conn = psycopg2.connect("dbname=test user=postgres")
    cur = conn.cursor()
    # ruleid: psycopg-sqli
    cur.execute('SELECT * FROM {}'.format(user_input))

#{/fact}
