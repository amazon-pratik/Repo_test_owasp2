#{fact rule=code-injection@v1.0 defects=0}



def okTest():
    # ok: dangerous-globals-use
    function = locals().get("test3")

    if function:
        return function(request)

    env = {'fwd': forward}
    return render(request, 'vulnerable/redirects/forward_failed.html', env)

#{/fact}
