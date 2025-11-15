#{fact rule=sql-injection@v1.0 defects=0}

from sqlalchemy import text

# ok
text(":n").bindparams(n=5)
#{/fact}
