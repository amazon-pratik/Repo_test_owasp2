#{fact rule=sql-injection@v1.0 defects=0}

import psycopg2

def ok11(user_input):
    conn = psycopg2.connect("dbname=test user=postgres")
    cur = conn.cursor()
    query = sql.SQL("select {field} from {table} where {pkey} = %s").format(
    field=sql.Identifier('my_name'),
    table=sql.Identifier('some_table'),
    pkey=sql.Identifier('id'))
    # ok: psycopg-sqli
    cur.execute(query)

#{/fact}
