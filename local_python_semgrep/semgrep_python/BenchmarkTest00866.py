#{fact rule=mass-assignment@v1.0 defects=1}

from django.shortcuts import render
from myapp.models import Whatzit

# Test cases borrowed from https://gist.github.com/jsocol/3217262

def update_whatzit(request, id):
    whatzit = Whatzit.objects.filter(pk=id)
    # ruleid: mass-assignment
    whatzit.update(**request.POST)
    whatzit.save()
    return render(request, 'saved.html')

#{/fact}
