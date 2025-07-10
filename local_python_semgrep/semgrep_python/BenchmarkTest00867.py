#{fact rule=mass-assignment@v1.0 defects=0}

from django.shortcuts import render
from myapp.models import Whatzit

# Test cases borrowed from https://gist.github.com/jsocol/3217262
def good_whatzit(request):
    # ok: mass-assignment
    Whatzit.objects.create(
        name=request.POST.get('name'),
        dob=request.POST.get('dob')
    )
    return render(request, 'created.html')

#{/fact}
