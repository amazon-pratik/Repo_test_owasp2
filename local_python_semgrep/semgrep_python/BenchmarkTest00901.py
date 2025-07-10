#{fact rule=server-side-request-forgery@v1.0 defects=1}

def test1():
    from urllib.request import urlopen
    from django.shortcuts import render

    def send_to_redis(request):
        # ruleid: ssrf-injection-urllib
        bucket = request.GET.get("bucket")
        inner_response = urlopen("http://my.redis.foo/{}".format(bucket), data=3)
        return render({"response_code": inner_response.status_code})


#{/fact}
