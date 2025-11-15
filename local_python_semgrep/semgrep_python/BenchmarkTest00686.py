#{fact rule=sql-injection@v1.0 defects=1}

from django.db.models.expressions import RawSQL
from django.http import HttpResponse


def get_user_age(request):
  # ruleid: sql-injection-using-rawsql
  user_name = request.get('user_name')
  user_age = RawSQL('SELECT user_age FROM myapp_person where user_name = %s'.format(user_name))
  html = "<html><body>User Age %s.</body></html>" % user_age
  return HttpResponse(html)

#{/fact}
