#{ex-fact rule=code-injection@v1.0 defects=1}

# import requests

# class FOO(resource):
#     method_decorators = decorator()

#     # ruleid:flask-api-method-string-format
#     def get2(self,arg2):
#         someFn()
#         bar = requests.get("foo".format(arg2))

#{/ex-fact}
