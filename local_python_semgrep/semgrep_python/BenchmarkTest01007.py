#{fact rule=server-side-request-forgery@v1.0 defects=1}


def test_bad_6():
    from requests import get
    from django.shortcuts import render

    def send_to_redis(request):
        # ruleid: ssrf-injection-requests
        bucket = request.headers["bucket"]
        inner_response = get("http://my.redis.foo/{}".format(bucket), data=3)
        return render({"response_code": inner_response.status_code})

#{/fact}
