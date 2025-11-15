#{fact rule=code-injection@v1.0 defects=1}



def test4(request):
    forward = request.GET.get('fwd')
    # ruleid: dangerous-globals-use
    result = locals()[forward].__dict__['abs'](-12)

    env = {'fwd': forward}
    return render(request, 'vulnerable/redirects/forward_failed.html', env)

#{/fact}
