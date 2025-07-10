#{fact rule=sql-injection@v1.0 defects=1}

from django.db.models.expressions import RawSQL
from django.http import HttpResponse


def get_users(request):
  # ruleid: sql-injection-using-rawsql
  client_id = request.headers.get('client_id')
  users = RawSQL(f'SELECT * FROM myapp_person where client_id = {client_id}')
  html = "<html><body>Users %s.</body></html>" % users
  return HttpResponse(html)

#{/fact}
