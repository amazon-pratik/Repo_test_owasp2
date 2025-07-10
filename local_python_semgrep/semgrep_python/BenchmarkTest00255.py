# {fact rule=untrusted-deserialization@v1.0 defects=1}

import multiprocessing
import multiprocessing.connection

rx = multiprocessing.connection.Client(('localhost', 12345)).recv()

# ruleid: multiprocessing-recv
connection = multiprocessing.connection.Client(
    ('localhost', 12345),
)

output = {}
connection.send(output)

rx = connection.recv()
# {/fact}
