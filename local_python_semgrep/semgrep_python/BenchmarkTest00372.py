#{fact rule=insecure-connection@v1.0 defects=1}

import urllib3 as ur3

# ruleid:http-not-https-connection
pool = ur3.connectionpool.HTTPConnectionPool("example.com")

#{/fact}
