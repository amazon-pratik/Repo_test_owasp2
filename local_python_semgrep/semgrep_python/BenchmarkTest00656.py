#{fact rule=cross-site-scripting@v1.0 defects=0}

import urllib
from django.db.models import Q
from django.auth import User
from django.http import HttpResponse, HttpResponseBadRequest
from django.utils.translation import ugettext as _

def previewNode(request, uid):
    """Preview evaluante node"""
    try:
        if uid in engines:
            # ok: reflected-data-httpresponsebadrequest
            _nodeId = request.data.get('nodeId')
            engines[uid].stoppable = True
            _res = engines[uid].model.previewNode(_nodeId)
            if _res is None:
                return HttpResponseBadRequest('', status=204)
            return HttpResponseBadRequest(_res)
        return manageNoEngine()
    except Exception as e:
        return genericApiException(e, engines[uid])
    finally:
        engines[uid].stoppable = False


#{/fact}
