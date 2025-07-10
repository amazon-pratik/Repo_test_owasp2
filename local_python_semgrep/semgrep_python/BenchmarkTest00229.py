#{fact rule=untrusted-deserialization@v1.0 defects=0}

from django.http import HttpResponse
import datetime

def current_datetime(request):
    # ok:avoid-insecure-deserialization
    user_obj = request.cookies.get('uuid')
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now

    return "Hey there! {}!".format(pickle.loads(b64decode(html)))


#{/fact}
