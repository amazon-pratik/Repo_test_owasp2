#{fact rule=untrusted-deserialization@v1.0 defects=0}

import marshal

fin = open('index.mar')
for line in fin:
    # ok: marshal-usage
    marshal.someokfunc(line)

#{/fact}
