#{fact rule=sql-injection@v1.0 defects=1}

from django.http import HttpResponse


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)

def get_user_age5(request):
    user_name = request.GET.get("user_name")
    query = "SELECT user_age FROM myapp_person where user_name = %s"
    # ruleid: tainted-sql-string
    user_age = Person.objects.raw(query % user_name)
    html = "<html><body>User Age %s.</body></html>" % user_age
    return HttpResponse(html)

#{/fact}
