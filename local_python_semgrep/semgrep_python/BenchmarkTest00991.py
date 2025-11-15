#{fact rule=sql-injection@v1.0 defects=0}

##########################################################################
# Connectionless query
##########################################################################

# String concatenation using + operator
engine = create_engine('postgresql://user@localhost/database')
echo("database connexion: ok")



# Query without concatenation
# ok: sqlalchemy-execute-raw-query
engine = create_engine('postgresql://user@localhost/database')
engine.execute("INSERT INTO person (name) VALUES ('Frodon Sacquet')")

##########################################################################
# Execute query without "With" block
##########################################################################

#{/fact}
