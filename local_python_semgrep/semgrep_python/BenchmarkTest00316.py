#{fact rule=improper-certificate-validation@v1.0 defects=1}

import urllib3 as ur3
import ssl as sss

import socket
import ssl

# from https://docs.python.org/3/library/ssl.html
hostname = 'www.python.org'
context = sss.create_default_context()


with socket.create_connection((hostname, 443)) as sock:
    # ruleid:disabled-cert-validation
    with context.wrap_socket(sock, server_hostname=hostname, cert_reqs = ssl.CERT_NONE) as ssock:
        print(ssock.version())

#{/fact}
