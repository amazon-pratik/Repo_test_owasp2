#{fact rule=resource-leak@v1.0 defects=0}

from ratelimit.decorators import ratelimit


# ok:missing-ratelimit
@ratelimit(key='users',rate='10/s')
def my_view(request):
    pass

#{/fact}
