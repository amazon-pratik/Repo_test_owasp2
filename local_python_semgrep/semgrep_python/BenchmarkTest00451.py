#{fact rule=untrusted-deserialization@v1.0 defects=1}

from django.http import HttpResponse
import datetime



def current_datetime(request):
    # ruleid:avoid-insecure-deserialization
    return "Hey there! {}!".format(pickle.loads(b64decode(request.cookies.get('uuid'))))

#{/fact}
