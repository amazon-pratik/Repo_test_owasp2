#{fact rule=open-redirect@v1.0 defects=0}

from django.shortcuts import redirect
from django.http import HttpResponseRedirect, HttpResponse
from django.utils.http import is_safe_url


def url_validation(request):
    # ok: open-redirect
    next = request.POST.get('next', request.GET.get('next'))
    if (next or not request.is_ajax()) and not is_safe_url(url=next, allowed_hosts=request.get_host()):
        next = "/index"
    response = HttpResponseRedirect(next) if next else HttpResponse(status=204)
    return response

#{/fact}
