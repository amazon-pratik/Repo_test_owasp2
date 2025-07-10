#{fact rule=cross-site-scripting@v1.0 defects=1}

import urllib
from django.db.models import Q
from django.auth import User
from django.http import HttpResponse, HttpResponseBadRequest
from django.utils.translation import ugettext as _

from org import engines, manageNoEngine, genericApiException


def previewNode(request, uid):
    """Preview evaluante node"""
    try:
        if uid in engines:
            _nodeId = request.data.get('nodeId')
            engines[uid].stoppable = True
            _res = engines[uid].model.previewNode(_nodeId)
            if _res is None:
                # ok:direct-use-of-httpresponse
                return HttpResponse('', status=204)
            # ruleid:direct-use-of-httpresponse
            return HttpResponse(_res)
        return manageNoEngine()
    except Exception as e:
        return genericApiException(e, engines[uid])
    finally:
        engines[uid].stoppable = False


#{/fact}
