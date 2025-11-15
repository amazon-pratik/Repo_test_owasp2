#{fact rule=improper-certificate-validation@v1.0 defects=0}

import urllib3 as ur3
import ssl as sss

import socket
import ssl

# from https://docs.python.org/3/library/ssl.html
hostname = 'www.python.org'
context = sss.create_default_context()

from urllib3 import PoolManager
manager = PoolManager(10)
r = manager.request('GET', 'http://google.com/')


# ok:disabled-cert-validation
pool = ur3.connection_from_url('someurl', cert_reqs='CERT NONE')

#{/fact}
