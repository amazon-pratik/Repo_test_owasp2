#{fact rule=server-side-request-forgery@v1.0 defects=1}

from django.http import HttpResponse
import requests

class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)


def ex5(request):
  env = request.POST.get('env')
  user_name = request.POST.get('user_name')
  # ruleid: tainted-url-host
  url = "https://{}/{}/age".format(env, user_name)
  user_age = requests.get(url)
  return HttpResponse(user_age)

#{/fact}
