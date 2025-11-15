#{fact rule=sql-injection@v1.0 defects=1}

from django.http import HttpResponse

class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)

def get_users(request):
  # ruleid: sql-injection-using-raw
  client_id = request.headers.get('client_id')
  users = Person.objects.raw('SELECT * FROM myapp_person where client_id = %s' % client_id)
  html = "<html><body>Users %s.</body></html>" % users
  return HttpResponse(html)

#{/fact}
