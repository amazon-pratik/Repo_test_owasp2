#{fact rule=path-traversal@v1.0 defects=1}

from django.http import FileResponse

def func(request):
    # ruleid: request-data-fileresponse
    filename = request.POST.get("filename")
    f = open(filename, 'rb')
    return FileResponse(f)


#{/fact}
