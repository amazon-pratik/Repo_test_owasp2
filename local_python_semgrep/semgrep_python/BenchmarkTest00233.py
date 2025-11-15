#{fact rule=untrusted-deserialization@v1.0 defects=0}

import jsonpickle

def ok():
    # ok: avoid-jsonpickle
    obj = jsonpickle.decode('foobar')

#{/fact}
