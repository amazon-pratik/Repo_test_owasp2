#{fact rule=nan-injection@v1.0 defects=1}

import models
from django.http import HttpResponse
from app import get_price, deny, buy, fetch_obj


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)


##### True Positives #########
def test1(request):
    tid = request.POST.get("tid")

    price = get_price()

    # ruleid: nan-injection
    x = float(tid)

    if x < price:
        return deny()
    return buy()

#{/fact}
