#{fact rule=sql-injection@v1.0 defects=1}

from django.http import HttpResponse


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)


##### True Positives #########
def get_user_age1(request):
    user_name = request.POST.get("user_name")
    user_age = Person.objects.raw( # ruleid: tainted-sql-string
        "SELECT user_age FROM myapp_person where user_name = %s" % user_name
    )
    html = "<html><body>User Age %s.</body></html>" % user_age
    return HttpResponse(html)



#{/fact}
