#{fact rule=sql-injection@v1.0 defects=0}

##########################################################################
# Connectionless query
##########################################################################

# String concatenation using + operator
engine = create_engine('postgresql://user@localhost/database')
echo("database connexion: ok")

# Insert multi data record using SQL Expression
connection_string = 'sqlite:///db.sqlite'
engine = create_engine(connection_string, echo=True)
with engine.connect() as connection:
  meta = MetaData()
  meta.reflect(bind=connection)
  product_table = meta.tables['product']
  # ok: sqlalchemy-execute-raw-query
  stmt = insert(product_table)
  values = [
      {field_name: 'hazelnut', field_price: 5},
      {field_name: 'banana', field_price: 8}
  ]
  print(stmt)
  connection.execute(stmt, values)

#{/fact}
