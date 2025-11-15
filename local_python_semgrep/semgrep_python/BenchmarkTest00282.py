#{fact rule=code-injection@v1.0 defects=1}


def test3(request):
    forward = request.GET.get('fwd')
    # ruleid: dangerous-globals-use
    function = test1.__globals__[forward]

    if function:
        return function(request)

    env = {'fwd': forward}
    return render(request, 'vulnerable/redirects/forward_failed.html', env)

#{/fact}
