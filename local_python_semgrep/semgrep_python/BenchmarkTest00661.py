#{fact rule=path-traversal@v1.0 defects=0}

from django.http import FileResponse

def safe(request):
    # ok: request-data-fileresponse
    url = request.GET.get("url")
    print(url)
    f = open("blah.txt", 'r')
    return FileResponse(f)

#{/fact}
