#{fact rule=open-redirect@v1.0 defects=1}

from django.shortcuts import redirect
from django.http import HttpResponseRedirect, HttpResponse
from django.utils.http import is_safe_url


def unsafe3(request):
    # ruleid: open-redirect
    url = request.POST["url"]
    return HttpResponseRedirect(url)

#{/fact}
