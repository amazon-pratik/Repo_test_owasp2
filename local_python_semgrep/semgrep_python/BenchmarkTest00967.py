#{fact rule=nan-injection@v1.0 defects=0}

import models
from django.http import HttpResponse
from app import get_price, deny, buy, fetch_obj


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)


def ok1(request, something_else):
    tid = request.POST.get("tid")

    obj = fetch_obj(tid)

    # ok: nan-injection
    float(obj.num)

#{/fact}
