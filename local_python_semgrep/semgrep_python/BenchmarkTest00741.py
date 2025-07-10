#{ex-fact rule=sql-injection@v1.0 defects=0}

# import psycopg2


# def ok9(user_input):
#     conn = psycopg2.connect("dbname=test user=postgres")
#     cur = conn.cursor()
#     # ok: psycopg-sqli
#     cur.execute('SELECT * FROM John'% ())

#{/ex-fact}
