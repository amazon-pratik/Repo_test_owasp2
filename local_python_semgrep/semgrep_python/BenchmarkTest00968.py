#{fact rule=nan-injection@v1.0 defects=0}

import models
from django.http import HttpResponse
from app import get_price, deny, buy, fetch_obj


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)


def ok2(request, something_else):
    tid = request.POST.get("tid")

    # ok: nan-injection
    int(float(tid))

    # ok: nan-injection
    float(int(tid))

    # ok: nan-injection
    int(bool(tid))
#{/fact}
