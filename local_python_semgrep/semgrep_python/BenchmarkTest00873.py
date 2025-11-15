#{fact rule=resource-leak@v1.0 defects=0}

from ratelimit.decorators import ratelimit

# ok:missing-ratelimit
@ratelimit(key='ip', rate='100/h')
def secondview(request):
    pass

#{/fact}
