#{fact rule=code-injection@v1.0 defects=1}



def test2(request):
    forward = request.GET.get('fwd')
    # ruleid: dangerous-globals-use
    function = locals().get(forward)

    if function:
        return function(request)

    env = {'fwd': forward}
    return render(request, 'vulnerable/redirects/forward_failed.html', env)

#{/fact}
