#{fact rule=sql-injection@v1.0 defects=0}

from django.db import connection

##### True Negatives #########
def fetch_name_4(request):
  # using param list is ok
  baz = request.data.get("baz")
  with connection.cursor() as cursor:
      cursor.execute("UPDATE bar SET foo = 1 WHERE baz = %s", [baz])
      cursor.execute("SELECT foo FROM bar WHERE baz = %s", [baz])
      row = cursor.fetchone()

  return row

#{/fact}
