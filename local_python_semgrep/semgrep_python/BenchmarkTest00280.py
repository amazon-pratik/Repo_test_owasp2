#{fact rule=code-injection@v1.0 defects=1}

def test1(request):
    forward = request.GET.get('fwd')
    globs = globals()
    # ruleid: dangerous-globals-use
    function = globs.get(forward)

    if function:
        return function(request)

    env = {'fwd': forward}
    return render(request, 'vulnerable/redirects/forward_failed.html', env)


#{/fact}
