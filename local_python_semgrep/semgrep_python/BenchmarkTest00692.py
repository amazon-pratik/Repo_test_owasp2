# #{ex-fact rule=sql-injection@v1.0 defects=1}
#
# from django.http import HttpResponse
#
# class Person(models.Model):
#     first_name = models.CharField(...)
#     last_name = models.CharField(...)
#     birth_date = models.DateField(...)
#
# def get_user_age(request):
#   # ruleid: sql-injection-using-raw
#   user_name = request.get('user_name')
#   user_age = Person.objects.raw('SELECT user_age FROM myapp_person where user_name = %s'.format(user_name))
#   html = "<html><body>User Age %s.</body></html>" % user_age
#   return HttpResponse(html)
#
# #{/ex-fact}
