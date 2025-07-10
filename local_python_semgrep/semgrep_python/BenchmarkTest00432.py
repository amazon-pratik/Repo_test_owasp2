#{fact rule=sql-injection@v1.0 defects=0}

import asyncio
import asyncpg


def ok6(user_input):
    conn = await aiopg.connect(database='aiopg',
                               user='aiopg',
                               password='secret',
                               host='127.0.0.1')
    cur = await conn.cursor()
    query = f'SELECT * FROM John'
    # ok: aiopg-sqli
    cur.execute(query)

#{/fact}
