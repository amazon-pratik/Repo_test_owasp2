#{fact rule=sql-injection@v1.0 defects=0}

from django.http import HttpResponse

class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)

##### raw() True Negatives #########
def get_user_age(request):
  user_name = request.get('user_name')
  # django queryset is good
  user_age = Person.objects.filter(user_name=user_name).first()
  html = "<html><body>User Age %s.</body></html>" % user_age
  return HttpResponse(html)


#{/fact}
