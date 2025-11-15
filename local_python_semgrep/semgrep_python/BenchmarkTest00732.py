#{fact rule=sql-injection@v1.0 defects=1}

import psycopg2

def bad4(user_input):
    conn = psycopg2.connect(DSN)
    with conn:
        with conn.cursor() as cur:
            sql_query = f'SELECT * FROM {user_input}'
            # ruleid: psycopg-sqli
            cur.execute(sql_query)

#{/fact}
