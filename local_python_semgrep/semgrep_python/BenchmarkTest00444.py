#{fact rule=cross-site-scripting@v1.0 defects=0}

import asyncio
import asyncpg


def ok11(user_input):
    con = await asyncpg.connect(user='postgres')
    # ok: asyncpg-sqli
    stmt = await con.prepare('SELECT ($1::int, $2::text)')
    print(stmt.get_parameters())

#{/fact}
