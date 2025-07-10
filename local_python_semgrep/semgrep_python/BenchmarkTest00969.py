#{fact rule=nan-injection@v1.0 defects=0}

import models
from django.http import HttpResponse
from app import get_price, deny, buy, fetch_obj


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)

def ok3(request):
    tid = request.POST.get("tid")

    if tid.lower() == "nan":
        raise ValueError

    # ok: nan-injection 
    num = float(tid)
    if num > get_price():
        buy()
    deny()
#{/fact}
