# #{ex-fact rule=sql-injection@v1.0 defects=1}

# import asyncio
# import asyncpg

# def bad1():
#     conn = await aiopg.connect(database='aiopg',
#                                user='aiopg',
#                                password='secret',
#                                host='127.0.0.1')
#     cur = await conn.cursor()
#     query = "SELECT name FROM users WHERE age=" + req.FormValue("age")
#     # ruleid: aiopg-sqli
#     await cur.execute(query)

# #{/ex-fact}
