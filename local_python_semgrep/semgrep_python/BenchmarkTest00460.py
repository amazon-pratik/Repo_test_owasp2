#{fact rule=untrusted-deserialization@v1.0 defects=0}

import yaml



def this_is_additionally_ok(stream):
    #ok:avoid-pyyaml-load
    return yaml.load_all(stream, Loader=yaml.CSafeLoader)

#{/fact}
