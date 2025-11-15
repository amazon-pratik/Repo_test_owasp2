#{ex-fact rule=server-side-request-forgery@v1.0 defects=0}

# from django.http import HttpResponse
# import requests

# class Person(models.Model):
#     first_name = models.CharField(...)
#     last_name = models.CharField(...)
#     birth_date = models.DateField(...)

# ##### True Negatives #########
# def ok1(request):
#   env = request.POST.get('env')
#   user_name = request.POST.get('user_name')
#   # ok: tainted-url-host
#   user_age = requests.get("https://example.com/%s/%s/age" % (env, user_name))
#   return HttpResponse(user_age)

#{/ex-fact}
