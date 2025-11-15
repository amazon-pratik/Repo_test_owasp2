#{ex-fact rule=sql-injection@v1.0 defects=0}

# import psycopg2

# def ok4(user_input):
#     conn = psycopg2.connect("dbname=test user=postgres")
#     cur = conn.cursor()
#     query = 'SELECT * FROM John'.format()
#     # ok: psycopg-sqli
#     cur.execute(query)

#{/ex-fact}
