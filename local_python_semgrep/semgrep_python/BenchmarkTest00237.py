# #{ex-fact rule=untrusted-deserialization@v1.0 defects=1}
#
# import yaml
#
#
# #ruleid:avoid-pyyaml-load
# yaml.load("!!python/object/new:os.system [echo EXPLOIT!]")
#
# #{/ex-fact}
