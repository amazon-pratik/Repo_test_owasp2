#{fact rule=cross-site-request-forgery@v1.0 defects=1}

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# ruleid: no-csrf-exempt
@csrf_exempt
def my_view(request):
    return HttpResponse('Hello world')


#{/fact}
