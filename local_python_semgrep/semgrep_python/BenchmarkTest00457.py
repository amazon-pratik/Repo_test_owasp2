# #{ex-fact rule=untrusted-deserialization@v1.0 defects=1}
# # Semgrep dataset has recently changed the test case here.
# # So corrected the dataset accordingly.
# #
# #{ex-fact rule=untrusted-deserialization@v1.0 defects=1}
#
# import yaml
#
#
#
# def other_thing(**kwargs):
#     #ruleid:avoid-pyyaml-load
#     yaml.load("!!python/object/new:os.system [echo EXPLOIT!]", Loader=yaml.Loader, **kwargs)
#
# #{/ex-fact}
