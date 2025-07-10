#{fact rule=improper-certificate-validation@v1.0 defects=1}

import ssl
import httplib.client


# ruleid:unverified-ssl-context
context = ssl._create_unverified_context()
conn = httplib.client.HTTPSConnection("123.123.21.21", context=context)

#{/fact}
