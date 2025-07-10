#{fact rule=path-traversal@v1.0 defects=0}

import re, os
from django.http import HttpResponse
from somewhere import APIView

def safe(request):
    # ok: path-traversal-open
    filename = "/tmp/data.txt"
    f = open(filename)
    f.write("hello")
    f.close()

#{/fact}
