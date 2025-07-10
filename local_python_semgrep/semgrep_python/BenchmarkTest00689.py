#{fact rule=sql-injection@v1.0 defects=1}

from django.db import connection

def fetch_name_2(request):
  # ruleid: sql-injection-db-cursor-execute
  baz = request.data.get("baz")
  with connection.cursor() as cursor:
      cursor.execute("SELECT foo FROM bar WHERE baz = %s" % baz)
      row = cursor.fetchone()
  return row

#{/fact}
