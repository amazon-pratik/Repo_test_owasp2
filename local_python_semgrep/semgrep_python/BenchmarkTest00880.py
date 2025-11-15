#{fact rule=nan-injection@v1.0 defects=1}

import models
from django.http import HttpResponse
from app import get_price, deny, buy, fetch_obj


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)


def test3(request, something_else):
    tid = request.GET['tid']

    # ruleid: nan-injection
    float(tid)

    # ruleid: nan-injection
    bool(tid)

    # ruleid: nan-injection
    complex(tid)

#{/fact}
