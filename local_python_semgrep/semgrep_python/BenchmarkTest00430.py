#{fact rule=sql-injection@v1.0 defects=0}

import asyncio
import asyncpg


def ok4(user_input):
    conn = await aiopg.connect(database='aiopg',
                               user='aiopg',
                               password='secret',
                               host='127.0.0.1')
    cur = await conn.cursor()
    query = 'SELECT * FROM John'.format()
    # ok: aiopg-sqli
    cur.fetchval(query)

#{/fact}
