#{fact rule=path-traversal@v1.0 defects=1}

import re, os
from django.http import HttpResponse
from somewhere import APIView

def unsafe_with(request):
    # ruleid: path-traversal-open
    filename = request.POST.get("filename")
    with open(filename, 'r') as fin:
        data = fin.read()
    return HttpResponse(data)

#{/fact}
