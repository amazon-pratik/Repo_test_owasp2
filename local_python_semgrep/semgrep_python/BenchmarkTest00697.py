#{fact rule=open-redirect@v1.0 defects=0}

from django.shortcuts import redirect
from django.http import HttpResponseRedirect, HttpResponse
from django.utils.http import is_safe_url

def url_validation2(request):
    # ok: open-redirect
    next = request.POST.get('next', request.GET.get('next'))
    ok = is_safe_url(url=next, allowed_hosts=request.get_host())
    if ok:
        response = HttpResponseRedirect(next) if next else HttpResponse(status=204)
    else:
        response = HttpResponseRedirect("index")
    return response

#{/fact}
