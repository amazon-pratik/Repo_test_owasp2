#{fact rule=cross-site-scripting@v1.0 defects=0}

import asyncio
import asyncpg

def ok9(user_input):
    con = await asyncpg.connect(user='postgres')
    # ok: asyncpg-sqli
    con.execute('SELECT * FROM John'% ())

#{/fact}
