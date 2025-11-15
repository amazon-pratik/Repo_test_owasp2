#{fact rule=improper-certificate-validation@v1.0 defects=1}

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

# ruleid:disabled-cert-validation
proxy = ur3.ProxyManager('http://localhost:3128/', cert_reqs = ssl.CERT_NONE)


#{/fact}
