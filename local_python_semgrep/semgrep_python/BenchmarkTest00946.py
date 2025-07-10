#{fact rule=improper-certificate-validation@v1.0 defects=0}

import ssl
import httplib.client

# ok:unverified-ssl-context
context = ssl.create_default_context()
conn = httplib.client.HTTPSConnection("123.123.21.21", context=context)

#{/fact}
