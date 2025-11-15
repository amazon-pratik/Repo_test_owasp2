#{fact rule=untrusted-deserialization@v1.0 defects=0}

import yaml





def this_is_ok_too(stream):
    #ok:avoid-pyyaml-load
    return yaml.load_all(stream, Loader=yaml.SafeLoader)

#{/fact}
