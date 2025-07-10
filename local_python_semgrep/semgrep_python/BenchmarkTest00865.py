#{fact rule=mass-assignment@v1.0 defects=1}

from django.shortcuts import render
from myapp.models import Whatzit

# Test cases borrowed from https://gist.github.com/jsocol/3217262

def create_whatzit(request):
    # ruleid: mass-assignment
    Whatzit.objects.create(**request.POST)
    return render(request, 'created.html')

#{/fact}
