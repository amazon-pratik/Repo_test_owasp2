#{fact rule=sql-injection@v1.0 defects=1}

from django.http import HttpResponse

class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)

def get_user_age(request):
  # ruleid: sql-injection-using-extra-where
  path = request.path
  user_age = Person.objects.extra(where=[f"path ={path}"])
  html = "<html><body>User Age %s.</body></html>" % user_age
  return HttpResponse(html)

#{/fact}
