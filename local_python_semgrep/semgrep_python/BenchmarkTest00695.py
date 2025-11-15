#{fact rule=open-redirect@v1.0 defects=0}

from django.shortcuts import redirect
from django.http import HttpResponseRedirect, HttpResponse
from django.utils.http import is_safe_url


def fine(request):
    # ok: open-redirect
    return HttpResponseRedirect(request.get_full_path())

#{/fact}
