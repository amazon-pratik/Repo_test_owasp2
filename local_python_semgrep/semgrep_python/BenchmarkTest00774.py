#{fact rule=insecure-cookie@v1.0 defects=0}


# cf. https://github.com/cruzegoodin/TSC-ShippingDetails/blob/cceee79014623c5ac8fb042b8301a427743627d6/venv/lib/python2.7/site-packages/pip/_vendor/requests/cookies.py#L306
import copy
import time
import collections
from .compat import cookielib, urlparse, urlunparse, Morsel
def merge_cookies(cookiejar, cookies):
    if not isinstance(cookiejar, cookielib.CookieJar):
        raise ValueError('You can only merge into CookieJar')
    if isinstance(cookies, dict):
        cookiejar = cookiejar_from_dict(
            cookies, cookiejar=cookiejar, overwrite=False)
    elif isinstance(cookies, cookielib.CookieJar):
        try:
            cookiejar.update(cookies)
        except AttributeError:
            for cookie_in_jar in cookies:
                # ok:secure-set-cookie
                cookiejar.set_cookie(cookie_in_jar)
    return cookiejar

#{/fact}
