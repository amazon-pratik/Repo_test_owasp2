#{fact rule=sql-injection@v1.0 defects=0}

from sqlalchemy import text


# ok
text("5")

#{/fact}
