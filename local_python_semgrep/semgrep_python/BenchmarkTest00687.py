#{fact rule=sql-injection@v1.0 defects=1}

from django.db import connection

##### True Positives #########
def fetch_name_0(request):
  with connection.cursor() as cursor:
      # ruleid: sql-injection-db-cursor-execute
      cursor.execute(f"SELECT foo FROM bar WHERE baz = {request.data.get('baz')}")
      # ruleid: sql-injection-db-cursor-execute
      cursor.execute("SELECT foo FROM bar WHERE baz = %s" % request.data.get('baz'))
      # ruleid: sql-injection-db-cursor-execute
      cursor.execute("SELECT foo FROM bar WHERE baz = %s".format(request.data.get('baz')))
      row = cursor.fetchone()
  return row


#{/fact}
