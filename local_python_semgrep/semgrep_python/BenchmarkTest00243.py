#{fact rule=untrusted-deserialization@v1.0 defects=0}

from ruamel.yaml import YAML

#ok:avoid-unsafe-ruamel
y1 = YAML()  # default is 'rt'


#{/fact}
