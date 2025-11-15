#{ex-fact rule=sql-injection@v1.0 defects=1}
#
# import asyncio
# import asyncpg

# def bad1():
#     conn = await asyncpg.connect(user='user', password='password',
#                                  database='database', host='127.0.0.1')

#     query = "SELECT name FROM users WHERE age=" + req.FormValue("age")
#     # ruleid: asyncpg-sqli
#     values = await conn.fetch(query)
#     await conn.close()
#
#{/ex-fact}
