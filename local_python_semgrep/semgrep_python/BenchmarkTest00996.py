#{fact rule=sql-injection@v1.0 defects=0}

##########################################################################
# Connectionless query
##########################################################################

# String concatenation using + operator
engine = create_engine('postgresql://user@localhost/database')
echo("database connexion: ok")

# SQL Composition using SQL Expression
connection_string = 'sqlite:///db.sqlite'
engine = create_engine(connection_string, echo=True)
with engine.connect() as connection:
  meta = MetaData()
  meta.reflect(bind=connection)
  product_table = meta.tables['product']
  # ok: sqlalchemy-execute-raw-query
  stmt = (
    select(product_table)
    .where(product_table.columns[field_name] == value_name)
  )
  result = connection.execute(stmt)

#{/fact}
