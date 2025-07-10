#{fact rule=sql-injection@v1.0 defects=0}

import asyncio
import asyncpg

def ok1(user_input):
    conn = await aiopg.connect(database='aiopg',
                               user='aiopg',
                               password='secret',
                               host='127.0.0.1')
    cur = await conn.cursor()
    # ok: aiopg-sqli
    cur.execute("SELECT * FROM test WHERE id = %s", (3,))

#{/fact}
