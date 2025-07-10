#{fact rule=untrusted-deserialization@v1.0 defects=1}

import multiprocessing
import multiprocessing.connection


rx = multiprocessing.connection.Client(('localhost', 12345)).recv()

output = {}
connection.send(output)

# toodoruleid:multiprocessing.recv
rx = connection.recv()

#{/fact}
