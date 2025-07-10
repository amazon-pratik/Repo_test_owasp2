#{fact rule=sql-injection@v1.0 defects=0}

from django.http import HttpResponse


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)

def get_users_ok(request):
    client_id = request.headers.get("client_id")
    # ok: tainted-sql-string
    users = Person.objects.raw(
        "SELECT * FROM myapp_person where client_id = %s", (client_id,)
    )
    html = "<html><body>Users %s.</body></html>" % users
    return HttpResponse(html)

#{/fact}
