#{fact rule=untrusted-deserialization@v1.0 defects=0}

import yaml




def this_is_also_ok(stream):
    #ok:avoid-pyyaml-load
    return yaml.load(stream, Loader=yaml.SafeLoader)

#{/fact}
