#{fact rule=server-side-request-forgery@v1.0 defects=1}


def test_bad_2():
    from requests import get
    from django.http import HttpResponse

    def send_to_redis(request):
        # ruleid: ssrf-injection-requests
        bucket = request.GET.get("bucket")
        inner_response = get("http://my.redis.foo/{}".format(bucket), data=3)
        return HttpResponse(body = {"response_code": inner_response.status_code})

#{/fact}
