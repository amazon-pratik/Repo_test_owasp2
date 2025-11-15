#{ex-fact rule=improper-certificate-validation@v1.0 defects=1}

# cf. https://github.com/PyCQA/bandit/blob/d5f8fa0d89d7b11442fc6ec80ca42953974354c8/examples/httplib_https.py

import httplib
import http.client
import six

# ruleid:httpsconnection-detected
six.moves.http_client.HTTPSConnection("example.com")

#{/ex-fact}
