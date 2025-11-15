#{fact rule=sql-injection@v1.0 defects=0}

query = 'SELECT * FROM myapp_person WHERE last_name = %s' % lname

# only fires on more than 1 argument
# OK
Person.objects.raw()

#{/fact}
